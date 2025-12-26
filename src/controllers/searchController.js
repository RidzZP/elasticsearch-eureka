const searchService = require("../services/searchService");
const config = require("../../config");

class SearchController {
    /**
     * Autocomplete for products
     * GET /api/v1/search/products/autocomplete?q=query&size=10
     */
    async autocompleteProducts(req, res) {
        try {
            const { q, size = 10 } = req.query;

            if (!q || q.trim().length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Query parameter "q" is required',
                });
            }

            const results = await searchService.autocomplete(
                config.indices.products,
                "name",
                q,
                parseInt(size)
            );

            return res.json(results);
        } catch (error) {
            console.error("Products autocomplete error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Suggestion for products (completion suggester)
     * GET /api/v1/search/products/suggest?q=query&size=5
     */
    async suggestProducts(req, res) {
        try {
            const { q, size = 5 } = req.query;

            if (!q || q.trim().length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Query parameter "q" is required',
                });
            }

            const results = await searchService.suggest(
                config.indices.products,
                "suggest",
                q,
                parseInt(size)
            );

            return res.json(results);
        } catch (error) {
            console.error("Products suggest error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Autocomplete for users
     * GET /api/v1/search/users/autocomplete?q=query&size=10
     */
    async autocompleteUsers(req, res) {
        try {
            const { q, size = 10 } = req.query;

            if (!q || q.trim().length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Query parameter "q" is required',
                });
            }

            const results = await searchService.multiFieldAutocomplete(
                config.indices.users,
                ["username", "full_name", "email"],
                q,
                parseInt(size)
            );

            return res.json(results);
        } catch (error) {
            console.error("Users autocomplete error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Autocomplete for Eureka Bookhouse products
     * GET /api/v1/search/eurekabookhouse/products/autocomplete?q=query&size=10
     */
    async autocompleteEurekabookhouseProducts(req, res) {
        try {
            const { q, size = 10 } = req.query;

            let results;

            // If no query provided, return all products sorted by timestamp
            if (!q || q.trim().length === 0) {
                results = await searchService.advancedSearch(config.indices.productEbh, {
                    size: parseInt(size),
                    from: 0,
                    sort: [{ "@timestamp": "desc" }],
                });
            } else {
                results = await searchService.multiFieldAutocomplete(
                    config.indices.productEbh,
                    ["name", "name_autocomplete", "seo"],
                    q,
                    parseInt(size)
                );
            }

            return res.json(results);
        } catch (error) {
            console.error("Eureka Bookhouse products autocomplete error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Advanced search for products
     * POST /api/v1/search/products/advanced
     * Body: { query, filters, size, from, sort }
     */
    async advancedSearchProducts(req, res) {
        try {
            const searchParams = req.body;

            const results = await searchService.advancedSearch(
                config.indices.products,
                searchParams
            );

            return res.json(results);
        } catch (error) {
            console.error("Advanced search error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Advanced search for users
     * POST /api/v1/search/users/advanced
     * Body: { query, filters, size, from, sort }
     */
    async advancedSearchUsers(req, res) {
        try {
            const searchParams = req.body;

            const results = await searchService.advancedSearch(
                config.indices.users,
                searchParams
            );

            return res.json(results);
        } catch (error) {
            console.error("Advanced search error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Health check endpoint
     * GET /api/v1/search/health
     */
    async healthCheck(req, res) {
        try {
            const esClient = require("../utils/elasticsearch");
            const isConnected = await esClient.checkConnection();

            return res.json({
                success: true,
                elasticsearch: isConnected ? "connected" : "disconnected",
                timestamp: new Date().toISOString(),
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Health check failed",
                error: error.message,
            });
        }
    }

    /**
     * List all Elasticsearch indices
     * GET /api/v1/search/indices
     */
    async listIndices(req, res) {
        try {
            const esClient = require("../utils/elasticsearch");
            const client = esClient.getClient();

            const response = await client.cat.indices({
                format: "json",
                h: "index,health,status,docs.count,store.size,pri,rep",
            });

            return res.json({
                success: true,
                total: response.length,
                indices: response,
            });
        } catch (error) {
            console.error("List indices error:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to list indices",
                error: error.message,
            });
        }
    }

    /**
     * Get data from specific index
     * GET /api/v1/search/indices/:index/data?size=10&from=0
     */
    async getIndexData(req, res) {
        try {
            const { index } = req.params;
            const { size = 10, from = 0 } = req.query;

            const esClient = require("../utils/elasticsearch");
            const client = esClient.getClient();

            // Check if index exists
            const exists = await esClient.indexExists(index);
            if (!exists) {
                return res.status(404).json({
                    success: false,
                    message: `Index "${index}" not found`,
                });
            }

            const response = await client.search({
                index,
                body: {
                    size: parseInt(size),
                    from: parseInt(from),
                    query: {
                        match_all: {},
                    },
                    sort: [{ _id: "asc" }],
                },
            });

            return res.json({
                success: true,
                index,
                total: response.hits.total.value,
                showing: response.hits.hits.length,
                from: parseInt(from),
                size: parseInt(size),
                results: response.hits.hits.map((hit) => ({
                    id: hit._id,
                    score: hit._score,
                    ...hit._source,
                })),
            });
        } catch (error) {
            console.error("Get index data error:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to get index data",
                error: error.message,
            });
        }
    }

    /**
     * Search Siplah products with pagination
     * GET /api/v1/search/siplah?q=query&page=1&size=10
     */
    async searchSiplah(req, res) {
        try {
            const { q, page = 1, size = 10 } = req.query;

            const results = await searchService.searchWithPagination(
                "siplah",
                q,
                parseInt(page),
                parseInt(size)
            );

            return res.json(results);
        } catch (error) {
            console.error("Siplah search error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Get all Siplah products with pagination
     * GET /api/v1/search/siplah/all?page=1&size=10
     */
    async getAllSiplah(req, res) {
        try {
            const { page = 1, size = 10 } = req.query;

            const results = await searchService.getAllWithPagination(
                "siplah",
                parseInt(page),
                parseInt(size)
            );

            return res.json(results);
        } catch (error) {
            console.error("Get all Siplah error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    /**
     * Get Siplah product by ID
     * GET /api/v1/search/siplah/:id
     */
    async getSiplahById(req, res) {
        try {
            const { id } = req.params;

            const result = await searchService.getById("siplah", id);

            if (!result.success) {
                return res.status(404).json(result);
            }

            return res.json(result);
        } catch (error) {
            console.error("Get Siplah by ID error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }
}

module.exports = new SearchController();
