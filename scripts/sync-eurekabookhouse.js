const mysql = require("mysql2/promise");
const { Client } = require("@elastic/elasticsearch");

const DB_CONFIG = {
    host: process.env.DB_HOST || "34.101.254.58",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "SipLah@2024",
    database: process.env.DB_NAME || "tb_2019",
    connectTimeout: 30000,
};

const esClient = new Client({
    node: "http://localhost:9400",
    requestTimeout: 60000,
});

async function syncData() {
    console.log("🔄 Starting Eureka Bookhouse data sync...\n");

    let connection;
    try {
        // Connect to MySQL
        console.log("📡 Connecting to MySQL database...");
        connection = await mysql.createConnection(DB_CONFIG);
        console.log("✅ Connected to MySQL\n");

        let totalSynced = 0;
        let duplicates = 0;

        // Sync db_product_description
        console.log("📦 Syncing db_product_description...");
        const [products] = await connection.execute(
            "SELECT product_id, name, seo FROM db_product_description"
        );
        console.log(`Found ${products.length} products from db_product_description`);

        const bulkOps = [];
        for (const product of products) {
            // Skip if product has no name or invalid data
            if (!product.name || !product.product_id) {
                duplicates++;
                continue;
            }

            bulkOps.push(
                {
                    update: {
                        _index: "product-ebh",
                        _id: `db_product_description_${product.product_id}`,
                    },
                },
                {
                    doc: {
                        product_id: product.product_id.toString(),
                        name: product.name,
                        seo: product.seo || "",
                        source_table: "db_product_description",
                        suggest: product.name,
                        name_autocomplete: product.name,
                        "@timestamp": new Date(),
                    },
                    doc_as_upsert: true,
                }
            );

            // Bulk insert every 500 documents
            if (bulkOps.length >= 1000) {
                await esClient.bulk({ body: bulkOps });
                totalSynced += bulkOps.length / 2;
                bulkOps.length = 0;
                process.stdout.write(`\r   Synced: ${totalSynced} documents...`);
            }
        }

        // Insert remaining documents
        if (bulkOps.length > 0) {
            await esClient.bulk({ body: bulkOps });
            totalSynced += bulkOps.length / 2;
        }

        console.log(
            `\r✅ Synced ${
                products.length - duplicates
            } products from db_product_description (skipped ${duplicates} invalid)\n`
        );

        // Sync db_gt_product_description
        console.log("📦 Syncing db_gt_product_description...");
        const [gtProducts] = await connection.execute(
            "SELECT product_id, name, seo FROM db_gt_product_description"
        );
        console.log(`Found ${gtProducts.length} products from db_gt_product_description`);

        const gtBulkOps = [];
        let gtDuplicates = 0;

        for (const product of gtProducts) {
            // Skip if product has no name or invalid data
            if (!product.name || !product.product_id) {
                gtDuplicates++;
                continue;
            }

            gtBulkOps.push(
                {
                    update: {
                        _index: "product-ebh",
                        _id: `db_gt_product_description_${product.product_id}`,
                    },
                },
                {
                    doc: {
                        product_id: product.product_id.toString(),
                        name: product.name,
                        seo: product.seo || "",
                        source_table: "db_gt_product_description",
                        suggest: product.name,
                        name_autocomplete: product.name,
                        "@timestamp": new Date(),
                    },
                    doc_as_upsert: true,
                }
            );

            // Bulk insert every 500 documents
            if (gtBulkOps.length >= 1000) {
                await esClient.bulk({ body: gtBulkOps });
                totalSynced += gtBulkOps.length / 2;
                gtBulkOps.length = 0;
                process.stdout.write(`\r   Synced: ${totalSynced} documents...`);
            }
        }

        // Insert remaining documents
        if (gtBulkOps.length > 0) {
            await esClient.bulk({ body: gtBulkOps });
            totalSynced += gtBulkOps.length / 2;
        }

        console.log(
            `\r✅ Synced ${
                gtProducts.length - gtDuplicates
            } products from db_gt_product_description (skipped ${gtDuplicates} invalid)\n`
        );

        // Refresh index
        await esClient.indices.refresh({ index: "product-ebh" });

        console.log(`\n✨ Sync completed! Total documents synced: ${totalSynced}`);
        console.log(`\n🔍 Test the API:`);
        console.log(
            `   http://localhost:3002/api/v1/search/eurekabookhouse/products/autocomplete?q=test\n`
        );
    } catch (error) {
        console.error("\n❌ Error during sync:", error.message);
        if (error.code === "ECONNREFUSED") {
            console.error(
                "   Database connection refused. Make sure your VPN is connected."
            );
        } else if (error.code === "ER_ACCESS_DENIED_ERROR") {
            console.error("   Access denied. Check your database credentials.");
        }
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
            console.log("🔌 MySQL connection closed");
        }
    }
}

syncData();
