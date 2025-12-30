require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("../config");
const esClient = require("./utils/elasticsearch");
const searchRoutes = require("./routes/search");
const siplahSearchRoutes = require("./routes/siplah/search");
const { specs, swaggerUi } = require("../config/swagger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Swagger Documentation
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        customCss: ".swagger-ui .topbar { display: none }",
        customSiteTitle: "Elasticsearch Autocomplete API Documentation",
    })
);

// Routes
app.use(`${config.server.apiPrefix}/search`, searchRoutes);
app.use(`${config.server.apiPrefix}/search`, siplahSearchRoutes);

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        service: "Elasticsearch Autocomplete Service",
        version: "1.0.0",
        status: "running",
        documentation: "/api-docs",
        endpoints: {
            health: `${config.server.apiPrefix}/search/health`,
            indices: `${config.server.apiPrefix}/search/indices`,
            indexInfo: `${config.server.apiPrefix}/search/indices/:index/info`,
            deleteIndex: `${config.server.apiPrefix}/search/indices/:index (DELETE)`,
            setupIndices: `${config.server.apiPrefix}/search/indices/setup (POST)`,
            syncSiplah: `${config.server.apiPrefix}/search/sync/siplah (POST)`,
            syncSiplahProviders: `${config.server.apiPrefix}/search/sync/siplah-providers (POST)`,
            syncEurekaBookhouse: `${config.server.apiPrefix}/search/sync/eurekabookhouse (POST)`,
            stopSync: `${config.server.apiPrefix}/search/sync/:syncType/stop (POST)`,
            syncStatus: `${config.server.apiPrefix}/search/sync/status (GET)`,
            indexData: `${config.server.apiPrefix}/search/indices/:index/data`,
            productsAutocomplete: `${config.server.apiPrefix}/search/products/autocomplete?q=query`,
            productsSuggest: `${config.server.apiPrefix}/search/products/suggest?q=query`,
            productsAdvanced: `${config.server.apiPrefix}/search/products/advanced`,
            usersAutocomplete: `${config.server.apiPrefix}/search/users/autocomplete?q=query`,
            usersAdvanced: `${config.server.apiPrefix}/search/users/advanced`,
            eurekabookhouseProductsAutocomplete: `${config.server.apiPrefix}/search/eurekabookhouse/products/autocomplete?q=query`,
            siplahSearch: `${config.server.apiPrefix}/siplah/search?query=&page=1&limit=10`,
        },
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found",
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
});

// Start server
const PORT = config.server.port;
const HOST = config.server.host;

async function startServer() {
    try {
        // Check Elasticsearch connection
        console.log("🔍 Checking Elasticsearch connection...");
        await esClient.checkConnection();

        // Start HTTP server
        app.listen(PORT, () => {
            console.log(`
╔═══════════════════════════════════════════════════════════╗
║  🚀 Elasticsearch Autocomplete Service                    ║
║                                                           ║
║  Server running on: http://${HOST}:${PORT}                ║
║  Environment: ${process.env.NODE_ENV || "development"}    ║
║  Elasticsearch: ${config.elasticsearch.node}              ║
║  API Docs: http://${HOST}:${PORT}/api-docs                ║
╚═══════════════════════════════════════════════════════════╝
      `);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
}

startServer();

module.exports = app;
