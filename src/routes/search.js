const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

/**
 * @swagger
 * /api/v1/search/health:
 *   get:
 *     summary: Health check endpoint
 *     description: Check the health status of the API and Elasticsearch connection
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthResponse'
 *       500:
 *         description: Service error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/health", searchController.healthCheck.bind(searchController));

/**
 * @swagger
 * /api/v1/search/indices:
 *   get:
 *     summary: List all Elasticsearch indices
 *     description: Get list of all Elasticsearch indices with their health status and document count
 *     tags: [Indices]
 *     responses:
 *       200:
 *         description: List of indices retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 total:
 *                   type: integer
 *                   example: 3
 *                 indices:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       index:
 *                         type: string
 *                         example: "product-ebh"
 *                       health:
 *                         type: string
 *                         example: "green"
 *                       status:
 *                         type: string
 *                         example: "open"
 *                       docs.count:
 *                         type: string
 *                         example: "150"
 *                       store.size:
 *                         type: string
 *                         example: "50kb"
 *                       pri:
 *                         type: string
 *                         example: "1"
 *                       rep:
 *                         type: string
 *                         example: "1"
 *       500:
 *         description: Failed to list indices
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/indices", searchController.listIndices.bind(searchController));

/**
 * @swagger
 * /api/v1/search/indices/{index}/data:
 *   get:
 *     summary: Get data from specific index
 *     description: Retrieve all documents from a specific Elasticsearch index with pagination
 *     tags: [Indices]
 *     parameters:
 *       - in: path
 *         name: index
 *         required: true
 *         schema:
 *           type: string
 *         description: Index name
 *         example: product-ebh
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of documents to return
 *         example: 10
 *       - in: query
 *         name: from
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Offset for pagination
 *         example: 0
 *     responses:
 *       200:
 *         description: Index data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 index:
 *                   type: string
 *                   example: "product-ebh"
 *                 total:
 *                   type: integer
 *                   example: 150
 *                 showing:
 *                   type: integer
 *                   example: 10
 *                 from:
 *                   type: integer
 *                   example: 0
 *                 size:
 *                   type: integer
 *                   example: 10
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Index not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Failed to get index data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/indices/:index/data", searchController.getIndexData.bind(searchController));

/**
 * @swagger
 * /api/v1/search/products/autocomplete:
 *   get:
 *     summary: Autocomplete search for products
 *     description: Search products with autocomplete functionality using edge_ngram tokenizer
 *     tags: [Products - Testing]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query string
 *         example: apple
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results to return
 *         example: 10
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     results:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - missing query parameter
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
    "/products/autocomplete",
    searchController.autocompleteProducts.bind(searchController)
);

/**
 * @swagger
 * /api/v1/search/products/suggest:
 *   get:
 *     summary: Suggest products using completion suggester
 *     description: Fast product suggestions using Elasticsearch completion suggester
 *     tags: [Products - Testing]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query prefix
 *         example: app
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 5
 *         description: Number of suggestions to return
 *         example: 5
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     results:
 *                       type: array
 *                       items:
 *                         allOf:
 *                           - $ref: '#/components/schemas/Product'
 *                           - type: object
 *                             properties:
 *                               text:
 *                                 type: string
 *                                 example: Apple iPhone 15 Pro
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/products/suggest", searchController.suggestProducts.bind(searchController));

/**
 * @swagger
 * /api/v1/search/products/advanced:
 *   post:
 *     summary: Advanced product search with filters
 *     description: Search products with advanced filters, sorting, and pagination
 *     tags: [Products - Testing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdvancedSearchRequest'
 *           examples:
 *             basic:
 *               summary: Basic search
 *               value:
 *                 query: "apple"
 *                 size: 10
 *             withFilters:
 *               summary: Search with filters
 *               value:
 *                 query: "smartphone"
 *                 filters:
 *                   category: "electronics"
 *                   price:
 *                     gte: 100
 *                     lte: 1000
 *                 size: 10
 *                 from: 0
 *                 sort:
 *                   - price: "asc"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     results:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
    "/products/advanced",
    searchController.advancedSearchProducts.bind(searchController)
);

/**
 * @swagger
 * /api/v1/search/users/autocomplete:
 *   get:
 *     summary: Autocomplete search for users
 *     description: Search users with multi-field autocomplete (username, full name, email)
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query string
 *         example: john
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results to return
 *         example: 10
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     results:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request - missing query parameter
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
    "/users/autocomplete",
    searchController.autocompleteUsers.bind(searchController)
);

/**
 * @swagger
 * /api/v1/search/eurekabookhouse/products/autocomplete:
 *   get:
 *     summary: Autocomplete search for Eureka Bookhouse products
 *     description: Search Eureka Bookhouse products with autocomplete functionality from product-ebh index. If no query provided, returns all products.
 *     tags: [Eureka Bookhouse]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: false
 *         schema:
 *           type: string
 *         description: Search query string (optional - returns all if not provided)
 *         example: buku
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results to return
 *         example: 10
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     results:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: db_product_description_123
 *                           score:
 *                             type: number
 *                             example: 1.5
 *                           product_id:
 *                             type: string
 *                             example: "123"
 *                           name:
 *                             type: string
 *                             example: "Buku Panduan JavaScript"
 *                           seo:
 *                             type: string
 *                             example: "buku-panduan-javascript"
 *                           source_table:
 *                             type: string
 *                             example: "db_product_description"
 *       400:
 *         description: Bad request - missing query parameter
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get(
    "/eurekabookhouse/products/autocomplete",
    searchController.autocompleteEurekabookhouseProducts.bind(searchController)
);

/**
 * @swagger
 * /api/v1/search/users/advanced:
 *   post:
 *     summary: Advanced user search with filters
 *     description: Search users with advanced filters, sorting, and pagination
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdvancedSearchRequest'
 *           examples:
 *             basic:
 *               summary: Basic search
 *               value:
 *                 query: "john doe"
 *                 size: 10
 *             withFilters:
 *               summary: Search with filters
 *               value:
 *                 query: "john"
 *                 filters: {}
 *                 size: 10
 *                 from: 0
 *                 sort:
 *                   - username: "asc"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     results:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
    "/users/advanced",
    searchController.advancedSearchUsers.bind(searchController)
);

module.exports = router;
