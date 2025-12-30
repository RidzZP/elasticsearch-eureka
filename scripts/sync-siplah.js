const mysql = require("mysql2/promise");
const { Client } = require("@elastic/elasticsearch");
const models = require("../src/models");
const syncManager = require("../src/utils/syncManager");

const DB_CONFIG = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectTimeout: 60000,
};

const esClient = new Client({
    node: `${process.env.ELASTICSEARCH_PROTOCOL || "http"}://${
        process.env.ELASTICSEARCH_HOST || "localhost"
    }:${process.env.ELASTICSEARCH_PORT || 9200}`,
    requestTimeout: 60000,
});

/**
 * Build 3-level category hierarchy
 */
async function buildCategoryHierarchy(categoryId, connection) {
    try {
        // Get current category
        const [currentCategories] = await connection.execute(
            "SELECT category_id, parent_id, name, slug, status FROM db_category_sandbox WHERE category_id = ? AND status = 1",
            [categoryId]
        );

        if (!currentCategories || currentCategories.length === 0) {
            return null;
        }

        const currentCategory = currentCategories[0];
        let categoryLevel = 0;
        let parentCategory = null;
        let grandParentCategory = null;
        let categoryChildren = [];
        let grandCategoryChildren = [];

        // Determine category level
        if (currentCategory.parent_id !== 0) {
            // Get parent category
            const [parentCategories] = await connection.execute(
                "SELECT category_id, parent_id, name, slug FROM db_category_sandbox WHERE category_id = ? AND status = 1",
                [currentCategory.parent_id]
            );

            if (parentCategories && parentCategories.length > 0) {
                parentCategory = parentCategories[0];

                if (parentCategory.parent_id === 0) {
                    categoryLevel = 1; // Current is child
                } else {
                    categoryLevel = 2; // Current is grandchild

                    // Get grandparent category
                    const [grandParentCategories] = await connection.execute(
                        "SELECT category_id, parent_id, name, slug FROM db_category_sandbox WHERE category_id = ? AND status = 1",
                        [parentCategory.parent_id]
                    );

                    if (grandParentCategories && grandParentCategories.length > 0) {
                        grandParentCategory = grandParentCategories[0];
                    }
                }
            }
        }

        // Build response based on level
        let categoryInfo = {};

        if (categoryLevel === 0) {
            // Level 0 (Root Category)
            categoryInfo = {
                category: {
                    value: currentCategory.category_id.toString(),
                    parentId: "0",
                    name: currentCategory.name,
                    slug: currentCategory.slug,
                },
                categoryLevel: 0,
            };
        } else if (categoryLevel === 1) {
            // Level 1 (Child Category)
            // Get siblings of current category (children of parent)
            const [children] = await connection.execute(
                "SELECT category_id, parent_id, name, slug FROM db_category_sandbox WHERE parent_id = ? AND status = 1 ORDER BY name ASC",
                [currentCategory.parent_id]
            );

            categoryChildren = children.map((child) => ({
                value: child.category_id.toString(),
                parentId: child.parent_id.toString(),
                name: child.name,
                slug: child.slug,
                isSelected: parseInt(child.category_id) === parseInt(categoryId),
            }));

            categoryInfo = {
                category: {
                    value: parentCategory.category_id.toString(),
                    parentId: "0",
                    name: parentCategory.name,
                    slug: parentCategory.slug,
                },
                categoryChildren: categoryChildren,
                categoryLevel: 1,
            };
        } else if (categoryLevel === 2) {
            // Level 2 (Grandchild Category) - 3 Level Hierarchy
            // If grandParentCategory not found, gracefully fallback to level 1 (similar to required: false)
            if (!grandParentCategory) {
                // Fallback: treat as level 1 (child of root) if grandparent missing
                const [children] = await connection.execute(
                    "SELECT category_id, parent_id, name, slug FROM db_category_sandbox WHERE parent_id = ? AND status = 1 ORDER BY name ASC",
                    [currentCategory.parent_id]
                );

                categoryChildren = children.map((child) => ({
                    value: child.category_id.toString(),
                    parentId: child.parent_id.toString(),
                    name: child.name,
                    slug: child.slug,
                    isSelected: parseInt(child.category_id) === parseInt(categoryId),
                }));

                return {
                    category: {
                        value: parentCategory.category_id.toString(),
                        parentId: parentCategory.parent_id.toString(),
                        name: parentCategory.name,
                        slug: parentCategory.slug,
                    },
                    categoryChildren: categoryChildren,
                    grandCategoryChildren: [],
                    categoryLevel: 1,
                };
            }

            // Get siblings of parent (children of grandparent)
            const [parentSiblings] = await connection.execute(
                "SELECT category_id, parent_id, name, slug FROM db_category_sandbox WHERE parent_id = ? AND status = 1 ORDER BY name ASC",
                [parentCategory.parent_id]
            );

            categoryChildren = parentSiblings.map((child) => ({
                value: child.category_id.toString(),
                parentId: child.parent_id.toString(),
                name: child.name,
                slug: child.slug,
                isSelected:
                    parseInt(child.category_id) === parseInt(parentCategory.category_id),
            }));

            // Get siblings of current (children of parent)
            const [grandChildren] = await connection.execute(
                "SELECT category_id, parent_id, name, slug FROM db_category_sandbox WHERE parent_id = ? AND status = 1 ORDER BY name ASC",
                [currentCategory.parent_id]
            );

            grandCategoryChildren = grandChildren.map((grandChild) => ({
                value: grandChild.category_id.toString(),
                parentId: grandChild.parent_id.toString(),
                name: grandChild.name,
                slug: grandChild.slug,
                isSelected: parseInt(grandChild.category_id) === parseInt(categoryId),
            }));

            categoryInfo = {
                category: {
                    value: grandParentCategory.category_id.toString(),
                    parentId: "0",
                    name: grandParentCategory.name,
                    slug: grandParentCategory.slug,
                },
                categoryChildren: categoryChildren,
                grandCategoryChildren: grandCategoryChildren,
                categoryLevel: 2,
            };
        }

        return categoryInfo;
    } catch (error) {
        console.error("Error building category hierarchy:", error);
        return null;
    }
}

async function syncSiplahProviders() {
    console.log("🏪 Starting Siplah providers sync...\n");

    let connection;
    let stopRequested = false;

    try {
        // Register sync with manager
        syncManager.startSync("siplah-providers", () => {
            stopRequested = true;
            console.log("🛑 Stop signal received for Siplah providers sync");
        });

        // Connect to MySQL
        console.log("📡 Connecting to MySQL database...");
        connection = await mysql.createConnection(DB_CONFIG);
        console.log("✅ Connected to MySQL\n");

        // Get total count of providers
        console.log("📊 Counting total providers...");
        const [countResult] = await connection.execute(`
            SELECT COUNT(*) as total
            FROM db_mall m
            WHERE m.status_approve = 1 AND m.blokir = 0
        `);
        const totalProviders = countResult[0].total;
        console.log(`Found ${totalProviders} providers to sync\n`);

        let totalSynced = 0;
        let skipped = 0;
        const BATCH_SIZE = 500; // Process 500 providers at a time
        let offset = 0;

        // Process providers in batches
        console.log("📦 Starting providers batch sync...");

        while (offset < totalProviders) {
            // Check if stop was requested
            if (stopRequested) {
                console.log("🛑 Siplah providers sync stopped by user request");
                break;
            }

            // Fetch batch of providers
            const [providers] = await connection.execute(`
                SELECT
                    m.mall_id, m.mall_code, m.mall_type, m.image, m.slug,
                    m.image_header, m.email, m.avatar, m.nama_perusahaan, m.nama_merk,
                    m.alamat_perusahaan, m.jenis, m.jenis_usaha, m.email_pic, m.nama_pic,
                    m.jabatan_pic, m.telp_pic, m.ktp_id, m.npwp_id, m.address,
                    m.province_id, m.province, m.province_kd, m.city_id, m.city_kd,
                    m.city, m.zone_id, m.zone_kd, m.zone_1, m.kelurahan_kd,
                    m.kelurahan, m.postcode, m.country, m.lat, m.lon,
                    m.lama_pengiriman, m.date_register, m.date_approve, m.date_update,
                    m.ip, m.user_agent,
                    mt.name as mall_type_name, mt.description as mall_type_description
                FROM db_mall m
                LEFT JOIN db_mall_type mt ON m.mall_type = mt.id
                WHERE m.status_approve = 1 AND m.blokir = 0
                LIMIT ${BATCH_SIZE} OFFSET ${offset}
            `);

            if (providers.length === 0) {
                break; // No more providers
            }

            const bulkOps = [];

            for (const provider of providers) {
                // Check if stop was requested
                if (stopRequested) {
                    console.log("🛑 Siplah providers sync stopped by user request");
                    break;
                }

                // Skip if no mall_id or invalid data
                if (!provider.mall_id) {
                    skipped++;
                    continue;
                }

                // Prepare mall_type object
                let mallType = null;
                if (provider.mall_type) {
                    mallType = {
                        id: provider.mall_type.toString(),
                        name: provider.mall_type_name || null,
                        description: provider.mall_type_description || null,
                    };
                }

                // Prepare document
                const doc = {
                    mall_id: provider.mall_id.toString(),
                    mall_code: provider.mall_code || null,
                    mall_type: mallType,
                    image: provider.image || null,
                    slug: provider.slug || null,
                    image_header: provider.image_header || null,
                    email: provider.email || null,
                    avatar: provider.avatar || null,
                    nama_perusahaan: provider.nama_perusahaan || null,
                    nama_merk: provider.nama_merk || null,
                    alamat_perusahaan: provider.alamat_perusahaan || null,
                    jenis: provider.jenis || null,
                    jenis_usaha: provider.jenis_usaha || null,
                    email_pic: provider.email_pic || null,
                    nama_pic: provider.nama_pic || null,
                    jabatan_pic: provider.jabatan_pic || null,
                    telp_pic: provider.telp_pic || null,
                    ktp_id: provider.ktp_id || null,
                    npwp_id: provider.npwp_id || null,
                    address: provider.address || null,
                    province_id: provider.province_id
                        ? provider.province_id.toString()
                        : null,
                    province: provider.province || null,
                    province_kd: provider.province_kd || null,
                    city_id: provider.city_id ? provider.city_id.toString() : null,
                    city_kd: provider.city_kd || null,
                    city: provider.city || null,
                    zone_id: provider.zone_id ? provider.zone_id.toString() : null,
                    zone_kd: provider.zone_kd || null,
                    zone_1: provider.zone_1 || null,
                    kelurahan_kd: provider.kelurahan_kd || null,
                    kelurahan: provider.kelurahan || null,
                    postcode: provider.postcode || null,
                    country: provider.country || null,
                    lat: provider.lat ? parseFloat(provider.lat) : null,
                    lon: provider.lon ? parseFloat(provider.lon) : null,
                    lama_pengiriman: provider.lama_pengiriman || null,
                    date_register: provider.date_register || null,
                    date_approve: provider.date_approve || null,
                    date_update: provider.date_update || null,
                    ip: provider.ip || null,
                    user_agent: provider.user_agent || null,
                    "@timestamp": new Date(),
                };

                bulkOps.push(
                    {
                        update: {
                            _index: "siplah-providers",
                            _id: `provider_${provider.mall_id}`,
                        },
                    },
                    {
                        doc: doc,
                        doc_as_upsert: true,
                    }
                );
            }

            // Insert batch to Elasticsearch
            if (bulkOps.length > 0) {
                await esClient.bulk({ body: bulkOps });
                totalSynced += bulkOps.length / 2;
            }

            // Update progress
            offset += providers.length;
            process.stdout.write(
                `\r   Progress: ${offset}/${totalProviders} (synced: ${totalSynced}, skipped: ${skipped})...`
            );
        }

        console.log(
            `\n✅ Completed! Processed ${totalProviders} providers (synced: ${totalSynced}, skipped: ${skipped})\n`
        );

        // Refresh providers index
        console.log("🔄 Refreshing siplah-providers index...");
        await esClient.indices.refresh({ index: "siplah-providers" });
        console.log("✅ Providers index refreshed\n");

        // Get providers index stats
        const stats = await esClient.count({ index: "siplah-providers" });
        console.log(`📊 Total documents in siplah-providers index: ${stats.count}\n`);

        console.log("✨ Siplah providers sync completed successfully!\n");
    } catch (error) {
        if (stopRequested) {
            console.log("🛑 Siplah providers sync was stopped by user request");
        } else {
            console.error("❌ Error syncing siplah providers data:", error);
        }
        throw error; // Re-throw to be handled by caller
    } finally {
        // Clean up sync manager
        if (syncManager.isRunning("siplah-providers")) {
            syncManager.stopSync("siplah-providers");
        }

        if (connection) {
            await connection.end();
            console.log("🔌 Database connection closed");
        }
    }
}

async function syncSiplahData() {
    console.log("🔄 Starting Siplah data sync...\n");

    let connection;
    let stopRequested = false;

    try {
        // Register sync with manager
        syncManager.startSync("siplah", () => {
            stopRequested = true;
            console.log("🛑 Stop signal received for Siplah sync");
        });

        // Connect to MySQL
        console.log("📡 Connecting to MySQL database...");
        connection = await mysql.createConnection(DB_CONFIG);
        console.log("✅ Connected to MySQL\n");

        // Get total count
        console.log("📊 Counting total products...");
        const [countResult] = await connection.execute(`
            SELECT COUNT(*) as total 
            FROM db_product p
            WHERE p.status = 1
        `);
        const totalProducts = countResult[0].total;
        console.log(`Found ${totalProducts} products to sync\n`);

        let totalSynced = 0;
        let skipped = 0;
        const BATCH_SIZE = 500; // Process 500 products at a time
        let offset = 0;

        // Process products in batches
        console.log("📦 Starting batch sync...");

        while (offset < totalProducts) {
            // Check if stop was requested
            if (stopRequested) {
                console.log("🛑 Siplah sync stopped by user request");
                break;
            }

            // Category cache for this batch only
            const categoryCache = new Map();

            // Fetch batch of products
            const [products] = await connection.execute(`
                SELECT 
                    p.product_id, p.model, p.sku, p.isbn, p.location,
                    p.quantity, p.image, p.manufacturer_id, p.category_id,
                    p.shipping, p.price,
                    p.weight, p.length, p.width, p.height,
                    p.subtract, p.minimum, p.status, 
                    p.date_added, p.date_modified, p.viewed, p.mall_id,
                    p.dpp_price, p.ppn_price, p.dpp_nilai_lain, p.pph_price, p.dana_terima,
                    p.price_nego, p.price1, p.price2, p.price3, p.price4, p.price5,
                    p.grosir_min1, p.grosir_price1, p.grosir_min2, p.grosir_price2,
                    p.grosir_min3, p.grosir_price3, p.grosir_min4, p.grosir_price4,
                    p.kondisi, p.date_available, p.jenjang, p.kelas, p.semester,
                    p.processor, p.memory, p.harddisk, p.cd_dvd, p.monitor,
                    p.sistem_operasi, p.aplikasi_terpasang, p.garansi, p.barang_produsen,
                    p.id_user_approve, p.blokir, p.disabled, p.hapus,
                    p.date_verified, p.date_deleted, p.layout, p.lama_pengerjaan,
                    p.is_image_external, p.grosir_pricezone1, p.grosir_pricezone2,
                    p.grosir_pricezone3, p.grosir_pricezone4, p.grosir_pricezone5,
                    p.produksi, p.availability, p.ppn_type, p.ppnTagItem, p.ppnTagName,
                    p.month_added,
                    pd.name, pd.description,
                    mfg.manufacturer_id as mfg_id, mfg.name as mfg_name, 
                    mfg.slug as mfg_slug, mfg.image as mfg_image, mfg.status as mfg_status,
                    m.mall_id as mall_id_ref, m.mall_code, m.name as mall_name, 
                    m.slug as mall_slug, m.image as mall_image,
                    cat.category_id as cat_id, cat.name as cat_name, 
                    cat.parent_id as cat_parent_id
                FROM db_product p
                INNER JOIN db_product_description pd ON p.product_id = pd.product_id
                LEFT JOIN db_manufacturer mfg ON p.manufacturer_id = mfg.manufacturer_id
                INNER JOIN db_mall m ON p.mall_id = m.mall_id
                LEFT JOIN db_category_sandbox cat ON p.category_id = cat.category_id AND cat.status = 1
                WHERE p.status = 1
                LIMIT ${BATCH_SIZE} OFFSET ${offset}
            `);

            if (products.length === 0) {
                break; // No more products
            }

            const bulkOps = [];

            for (const product of products) {
                // Check if stop was requested
                if (stopRequested) {
                    console.log("🛑 Siplah sync stopped by user request");
                    break;
                }

                // Get manufacturer from JOIN result
                let manufacturer = null;
                if (product.mfg_id) {
                    manufacturer = {
                        manufacturer_id: product.mfg_id.toString(),
                        name: product.mfg_name,
                        slug: product.mfg_slug,
                        image: product.mfg_image,
                        status: product.mfg_status ? product.mfg_status.toString() : null,
                    };
                }

                // Get mall from JOIN result
                let mall = null;
                if (product.mall_id_ref) {
                    mall = {
                        mall_id: product.mall_id_ref.toString(),
                        mall_code: product.mall_code,
                        name: product.mall_name,
                        slug: product.mall_slug,
                        image: product.mall_image,
                    };
                }

                // Get category hierarchy from JOIN result (similar to example function)
                let categoryHierarchy = null;
                let basicCategory = null;

                // Get basic category info from JOIN result (like the example function does)
                if (product.cat_id) {
                    basicCategory = {
                        category_id: product.cat_id.toString(),
                        name: product.cat_name,
                        parent_id: product.cat_parent_id
                            ? product.cat_parent_id.toString()
                            : "0",
                    };
                }

                // First, try to use category_id from product table (direct relationship)
                let categoryId = product.category_id;

                // If no direct category_id, fall back to db_product_to_category (junction table)
                if (!categoryId) {
                    const [productCategories] = await connection.execute(
                        `SELECT ptc.category_id 
                     FROM db_product_to_category ptc 
                     WHERE ptc.product_id = ? 
                     LIMIT 1`,
                        [product.product_id]
                    );

                    if (productCategories && productCategories.length > 0) {
                        categoryId = productCategories[0].category_id;
                    }
                }

                // Get hierarchy from cache or build it
                if (categoryId) {
                    // Check cache first
                    if (!categoryCache.has(categoryId)) {
                        // Build and cache it for this batch
                        const hierarchy = await buildCategoryHierarchy(
                            categoryId,
                            connection
                        );
                        if (hierarchy) {
                            categoryCache.set(categoryId, hierarchy);
                        }
                    }
                    categoryHierarchy = categoryCache.get(categoryId) || null;
                }

                // Skip if no name or invalid data
                if (!product.name) {
                    skipped++;
                    continue;
                }

                // Prepare document
                const doc = {
                    product_id: product.product_id.toString(),
                    model: product.model,
                    sku: product.sku,
                    isbn: product.isbn,
                    location: product.location,
                    quantity: product.quantity,
                    image: product.image,
                    manufacturer_id: product.manufacturer_id
                        ? product.manufacturer_id.toString()
                        : null,
                    shipping: product.shipping ? true : false,
                    price: product.price ? parseFloat(product.price) : 0,
                    dpp_price: product.dpp_price || null,
                    ppn_price: product.ppn_price || null,
                    dpp_nilai_lain: product.dpp_nilai_lain
                        ? parseFloat(product.dpp_nilai_lain)
                        : null,
                    pph_price: product.pph_price || null,
                    dana_terima: product.dana_terima || null,
                    price_nego: product.price_nego || 0,
                    price1: product.price1 || 0,
                    price2: product.price2 || 0,
                    price3: product.price3 || 0,
                    price4: product.price4 || 0,
                    price5: product.price5 || 0,
                    grosir_min1: product.grosir_min1 || 0,
                    grosir_price1: product.grosir_price1 || 0,
                    grosir_min2: product.grosir_min2 || 0,
                    grosir_price2: product.grosir_price2 || 0,
                    grosir_min3: product.grosir_min3 || 0,
                    grosir_price3: product.grosir_price3 || 0,
                    grosir_min4: product.grosir_min4 || 0,
                    grosir_price4: product.grosir_price4 || 0,
                    kondisi: product.kondisi || null,
                    date_available: product.date_available || null,
                    jenjang: product.jenjang || null,
                    kelas: product.kelas || null,
                    semester: product.semester || null,
                    processor: product.processor || null,
                    memory: product.memory || null,
                    harddisk: product.harddisk || null,
                    cd_dvd: product.cd_dvd || null,
                    monitor: product.monitor || null,
                    sistem_operasi: product.sistem_operasi || null,
                    aplikasi_terpasang: product.aplikasi_terpasang || null,
                    garansi: product.garansi || null,
                    barang_produsen: product.barang_produsen || null,
                    weight: product.weight ? parseFloat(product.weight) : 0,
                    length: product.length ? parseFloat(product.length) : 0,
                    width: product.width ? parseFloat(product.width) : 0,
                    height: product.height ? parseFloat(product.height) : 0,
                    subtract: product.subtract ? true : false,
                    minimum: product.minimum || 1,
                    status: product.status ? product.status.toString() : "0",
                    id_user_approve: product.id_user_approve || 0,
                    blokir: product.blokir || 0,
                    disabled: product.disabled || "N",
                    hapus: product.hapus || "N",
                    date_added: product.date_added,
                    date_modified: product.date_modified,
                    date_verified: product.date_verified || null,
                    date_deleted: product.date_deleted || null,
                    viewed: product.viewed || 0,
                    layout: product.layout || 1,
                    lama_pengerjaan: product.lama_pengerjaan || 0,
                    is_image_external: product.is_image_external || 0,
                    grosir_pricezone1: product.grosir_pricezone1 || null,
                    grosir_pricezone2: product.grosir_pricezone2 || null,
                    grosir_pricezone3: product.grosir_pricezone3 || null,
                    grosir_pricezone4: product.grosir_pricezone4 || null,
                    grosir_pricezone5: product.grosir_pricezone5 || null,
                    produksi: product.produksi || null,
                    availability: product.availability || null,
                    ppn_type: product.ppn_type || null,
                    ppn_tag_item: product.ppnTagItem || 0,
                    ppn_tag_name: product.ppnTagName || null,
                    month_added: product.month_added || null,
                    mall_id: product.mall_id ? product.mall_id.toString() : null,
                    name: product.name,
                    description: product.description || "",
                    manufacturer: manufacturer,
                    mall: mall,
                    suggest: product.name,
                    "@timestamp": new Date(),
                };

                // Add category hierarchy if exists, otherwise use basic category from JOIN
                if (categoryHierarchy) {
                    doc.category = categoryHierarchy.category || null;
                    doc.categoryChildren = categoryHierarchy.categoryChildren || [];
                    doc.grandCategoryChildren =
                        categoryHierarchy.grandCategoryChildren || [];
                    doc.categoryLevel = categoryHierarchy.categoryLevel || 0;
                } else if (basicCategory) {
                    // Use basic category info from JOIN (similar to example function)
                    doc.category = {
                        value: basicCategory.category_id,
                        parentId: basicCategory.parent_id,
                        name: basicCategory.name,
                        slug: "", // Will be populated if needed
                    };
                    doc.categoryChildren = [];
                    doc.grandCategoryChildren = [];
                    doc.categoryLevel = basicCategory.parent_id === "0" ? 0 : 1;
                }

                bulkOps.push(
                    {
                        update: {
                            _index: "siplah",
                            _id: `product_${product.product_id}`,
                        },
                    },
                    {
                        doc: doc,
                        doc_as_upsert: true,
                    }
                );
            }

            // Insert batch to Elasticsearch
            if (bulkOps.length > 0) {
                await esClient.bulk({ body: bulkOps });
                totalSynced += bulkOps.length / 2;
            }

            // Update progress
            offset += products.length;
            process.stdout.write(
                `\r   Progress: ${offset}/${totalProducts} (synced: ${totalSynced}, skipped: ${skipped})...`
            );

            // Clear category cache for this batch
            categoryCache.clear();
        }

        console.log(
            `\n✅ Completed! Processed ${totalProducts} products (synced: ${totalSynced}, skipped: ${skipped})\n`
        );

        // Refresh index
        console.log("🔄 Refreshing siplah index...");
        await esClient.indices.refresh({ index: "siplah" });
        console.log("✅ Index refreshed\n");

        // Get index stats
        const stats = await esClient.count({ index: "siplah" });
        console.log(`📊 Total documents in siplah index: ${stats.count}\n`);

        console.log("\n✨ Siplah sync completed successfully!\n");
    } catch (error) {
        if (stopRequested) {
            console.log("🛑 Siplah sync was stopped by user request");
        } else {
            console.error("❌ Error syncing siplah data:", error);
        }
        throw error; // Re-throw to be handled by caller
    } finally {
        // Clean up sync manager
        if (syncManager.isRunning("siplah")) {
            syncManager.stopSync("siplah");
        }

        if (connection) {
            await connection.end();
            console.log("🔌 Database connection closed");
        }
    }
}

// Run if called directly
if (require.main === module) {
    syncSiplahData();
}

module.exports = {
    syncSiplahData,
    syncSiplahProviders,
};
