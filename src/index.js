require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("../config");
const esClient = require("./utils/elasticsearch");
const searchRoutes = require("./routes/search");
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
            indexData: `${config.server.apiPrefix}/search/indices/:index/data`,
            productsAutocomplete: `${config.server.apiPrefix}/search/products/autocomplete?q=query`,
            productsSuggest: `${config.server.apiPrefix}/search/products/suggest?q=query`,
            productsAdvanced: `${config.server.apiPrefix}/search/products/advanced`,
            usersAutocomplete: `${config.server.apiPrefix}/search/users/autocomplete?q=query`,
            usersAdvanced: `${config.server.apiPrefix}/search/users/advanced`,
            eurekabookhouseProductsAutocomplete: `${config.server.apiPrefix}/search/eurekabookhouse/products/autocomplete?q=query`,
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
║  Server running on: http://35.219.6.224:${PORT}                ║
║  Environment: ${process.env.NODE_ENV || "development"}                              ║
║  Elasticsearch: ${config.elasticsearch.node}  ║
║  API Docs: http://35.219.6.224:${PORT}/api-docs               ║
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
