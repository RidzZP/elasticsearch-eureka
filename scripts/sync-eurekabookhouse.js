const mysql = require("mysql2/promise");
const { Client } = require("@elastic/elasticsearch");
const syncManager = require("../src/utils/syncManager");

const DB_CONFIG = {
    host: process.env.DB_HOST || "34.50.96.60",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "SipLah@2024",
    database: process.env.DB_NAME || "tb_2019",
    connectTimeout: 30000,
};

const esClient = new Client({
    node: `${process.env.ELASTICSEARCH_PROTOCOL || "http"}://${
        process.env.ELASTICSEARCH_HOST || "localhost"
    }:${process.env.ELASTICSEARCH_PORT || 9200}`,
    requestTimeout: 60000,
});

async function syncData() {
    console.log("🔄 Starting Eureka Bookhouse data sync...\n");

    let connection;
    let stopRequested = false;

    try {
        // Register sync with manager
        syncManager.startSync("eurekabookhouse", () => {
            stopRequested = true;
            console.log("🛑 Stop signal received for Eureka Bookhouse sync");
        });

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
            // Check if stop was requested
            if (stopRequested) {
                console.log("🛑 Eureka Bookhouse sync stopped by user request");
                break;
            }

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
                // Check if stop was requested before bulk operation
                if (stopRequested) {
                    console.log(
                        "🛑 Eureka Bookhouse sync stopped by user request before bulk insert"
                    );
                    break;
                }

                await esClient.bulk({ body: bulkOps });
                totalSynced += bulkOps.length / 2;
                bulkOps.length = 0;
                process.stdout.write(`\r   Synced: ${totalSynced} documents...`);
            }
        }

        // Insert remaining documents
        if (bulkOps.length > 0 && !stopRequested) {
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

        console.log("\n✨ Eureka Bookhouse sync completed successfully!\n");
    } catch (error) {
        if (stopRequested) {
            console.log("🛑 Eureka Bookhouse sync was stopped by user request");
        } else {
            console.error("\n❌ Error during sync:", error.message);
            if (error.code === "ECONNREFUSED") {
                console.error(
                    "   Database connection refused. Make sure your VPN is connected."
                );
            } else if (error.code === "ER_ACCESS_DENIED_ERROR") {
                console.error("   Access denied. Check your database credentials.");
            }
        }
        throw error; // Re-throw to be handled by caller
    } finally {
        // Clean up sync manager
        if (syncManager.isRunning("eurekabookhouse")) {
            syncManager.stopSync("eurekabookhouse");
        }

        if (connection) {
            await connection.end();
            console.log("🔌 MySQL connection closed");
        }
    }
}

syncData();

// Run if called directly
if (require.main === module) {
    syncData();
}

module.exports = syncData;
