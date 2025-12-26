const mysql = require("mysql2/promise");
const { Client } = require("@elastic/elasticsearch");
const models = require("../src/models");

const DB_CONFIG = {
    host: process.env.DB_HOST || "35.219.24.215",
    port: 3306,
    user: process.env.DB_USER || "Siplah2025",
    password: process.env.DB_PASS || "@SipLah2025!",
    database: process.env.DB_NAME || "lkpp_siplah2019",
    connectTimeout: 30000,
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
            // Check if grandParentCategory exists
            if (!grandParentCategory) {
                console.warn(
                    `Grandparent category not found for category ID: ${categoryId}`
                );
                return null;
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

async function syncSiplahData() {
    console.log("🔄 Starting Siplah data sync...\n");

    let connection;
    try {
        // Connect to MySQL
        console.log("📡 Connecting to MySQL database...");
        connection = await mysql.createConnection(DB_CONFIG);
        console.log("✅ Connected to MySQL\n");

        let totalSynced = 0;
        let skipped = 0;

        // Sync db_product with related data
        console.log("📦 Syncing products from db_product...");
        const [products] = await connection.execute(`
            SELECT 
                p.product_id, p.model, p.sku, p.isbn, p.location,
                p.quantity, p.image, p.manufacturer_id,
                p.shipping, p.price,
                p.weight, p.length, p.width, p.height,
                p.subtract, p.minimum, p.status, 
                p.date_added, p.date_modified, p.viewed, p.mall_id,
                pd.name, pd.description,
                mfg.manufacturer_id as mfg_id, mfg.name as mfg_name, 
                mfg.slug as mfg_slug, mfg.image as mfg_image, mfg.status as mfg_status,
                m.mall_id as mall_id_ref, m.mall_code, m.name as mall_name, 
                m.slug as mall_slug, m.image as mall_image
            FROM db_product p
            INNER JOIN db_product_description pd ON p.product_id = pd.product_id
            LEFT JOIN db_manufacturer mfg ON p.manufacturer_id = mfg.manufacturer_id
            LEFT JOIN db_mall m ON p.mall_id = m.mall_id
            WHERE p.status = 1
        `);

        console.log(`Found ${products.length} products from db_product`);

        const bulkOps = [];
        let processedCount = 0;

        for (const product of products) {
            processedCount++;

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

            // Get category hierarchy using separate query with LEFT JOIN
            let categoryHierarchy = null;
            const [productCategories] = await connection.execute(
                `SELECT ptc.category_id 
                 FROM db_product_to_category ptc 
                 WHERE ptc.product_id = ? 
                 LIMIT 1`,
                [product.product_id]
            );

            if (productCategories && productCategories.length > 0) {
                const categoryId = productCategories[0].category_id;
                categoryHierarchy = await buildCategoryHierarchy(categoryId, connection);
            }

            // Skip if no name or invalid data
            if (!product.name) {
                skipped++;
                if (processedCount % 100 === 0) {
                    process.stdout.write(
                        `\r   Processed: ${processedCount}/${products.length} (synced: ${totalSynced}, skipped: ${skipped})...`
                    );
                }
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
                weight: product.weight ? parseFloat(product.weight) : 0,
                length: product.length ? parseFloat(product.length) : 0,
                width: product.width ? parseFloat(product.width) : 0,
                height: product.height ? parseFloat(product.height) : 0,
                subtract: product.subtract ? true : false,
                minimum: product.minimum || 1,
                status: product.status ? product.status.toString() : "0",
                date_added: product.date_added,
                date_modified: product.date_modified,
                viewed: product.viewed || 0,
                mall_id: product.mall_id ? product.mall_id.toString() : null,
                name: product.name,
                description: product.description || "",
                manufacturer: manufacturer,
                mall: mall,
                suggest: product.name,
                "@timestamp": new Date(),
            };

            // Add category hierarchy if exists
            if (categoryHierarchy) {
                doc.category = categoryHierarchy.category || null;
                doc.categoryChildren = categoryHierarchy.categoryChildren || [];
                doc.grandCategoryChildren = categoryHierarchy.grandCategoryChildren || [];
                doc.categoryLevel = categoryHierarchy.categoryLevel || 0;
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

            // Bulk insert every 100 documents
            if (bulkOps.length >= 200) {
                await esClient.bulk({ body: bulkOps });
                totalSynced += bulkOps.length / 2;
                bulkOps.length = 0;
                process.stdout.write(
                    `\r   Processed: ${processedCount}/${products.length} (synced: ${totalSynced}, skipped: ${skipped})...`
                );
            }
        }

        // Insert remaining documents
        if (bulkOps.length > 0) {
            await esClient.bulk({ body: bulkOps });
            totalSynced += bulkOps.length / 2;
        }

        console.log(
            `\n✅ Completed! Processed ${processedCount} products (synced: ${totalSynced}, skipped: ${skipped})\n`
        );

        // Refresh index
        console.log("🔄 Refreshing siplah index...");
        await esClient.indices.refresh({ index: "siplah" });
        console.log("✅ Index refreshed\n");

        // Get index stats
        const stats = await esClient.count({ index: "siplah" });
        console.log(`📊 Total documents in siplah index: ${stats.count}\n`);
    } catch (error) {
        console.error("❌ Error syncing siplah data:", error);
        process.exit(1);
    } finally {
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

module.exports = syncSiplahData;
