const fs = require("fs");
const path = require("path");
const esClient = require("../src/utils/elasticsearch");

const mappingsDir = path.join(__dirname, "../elasticsearch/mappings");

async function setupIndices() {
    console.log("🔧 Setting up Elasticsearch indices...\n");

    try {
        // Check connection
        await esClient.checkConnection();

        // Get all mapping files
        const files = fs.readdirSync(mappingsDir).filter((f) => f.endsWith(".json"));

        for (const file of files) {
            const indexName = file.replace("-template.json", "");
            const mappingPath = path.join(mappingsDir, file);
            const mapping = JSON.parse(fs.readFileSync(mappingPath, "utf8"));

            console.log(`\n📋 Processing index: ${indexName}`);

            // Check if index exists
            const exists = await esClient.indexExists(indexName);

            if (exists) {
                console.log(`⚠️  Index ${indexName} already exists. Skipping...`);
                continue;
            }

            // Create index with mapping
            const created = await esClient.createIndex(indexName, {
                settings: mapping.settings,
                mappings: mapping.mappings,
            });

            if (created) {
                console.log(`✅ Successfully created index: ${indexName}`);
            }
        }

        console.log("\n✨ Index setup completed!\n");
    } catch (error) {
        console.error("❌ Error setting up indices:", error);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    setupIndices();
}

module.exports = setupIndices;
