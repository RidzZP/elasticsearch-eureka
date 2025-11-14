const esClient = require("../src/utils/elasticsearch");
const config = require("../config");

async function seedProducts() {
    console.log("🌱 Seeding products data...\n");

    const client = esClient.getClient();
    const index = config.indices.products;

    // Sample products data
    const products = [
        {
            id: "1",
            name: "Apple iPhone 15 Pro",
            description: "Latest flagship smartphone with advanced features",
            category: "electronics",
            price: 999.99,
            suggest: "Apple iPhone 15 Pro",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        },
        {
            id: "2",
            name: "Samsung Galaxy S24 Ultra",
            description: "Premium Android smartphone with S Pen",
            category: "electronics",
            price: 1199.99,
            suggest: "Samsung Galaxy S24 Ultra",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        },
        {
            id: "3",
            name: 'Apple MacBook Pro 16"',
            description: "Powerful laptop for professionals",
            category: "computers",
            price: 2499.99,
            suggest: 'Apple MacBook Pro 16"',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        },
        {
            id: "4",
            name: "Sony WH-1000XM5 Headphones",
            description: "Industry-leading noise cancelling headphones",
            category: "audio",
            price: 399.99,
            suggest: "Sony WH-1000XM5 Headphones",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        },
        {
            id: "5",
            name: "Apple AirPods Pro",
            description: "Wireless earbuds with active noise cancellation",
            category: "audio",
            price: 249.99,
            suggest: "Apple AirPods Pro",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        },
    ];

    try {
        await esClient.checkConnection();

        // Check if index exists
        const exists = await esClient.indexExists(index);
        if (!exists) {
            console.log(
                `⚠️  Index ${index} does not exist. Please run setup-indices.js first.`
            );
            process.exit(1);
        }

        // Bulk index products
        const body = products.flatMap((doc) => [
            { index: { _index: index, _id: doc.id } },
            doc,
        ]);

        const response = await client.bulk({ refresh: true, body });

        if (response.errors) {
            console.error("❌ Some documents failed to index");
            response.items.forEach((item, i) => {
                if (item.index.error) {
                    console.error(`Error indexing document ${i}:`, item.index.error);
                }
            });
        } else {
            console.log(`✅ Successfully indexed ${products.length} products`);
        }

        console.log("\n✨ Seeding completed!\n");
    } catch (error) {
        console.error("❌ Error seeding products:", error);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    seedProducts();
}

module.exports = seedProducts;
