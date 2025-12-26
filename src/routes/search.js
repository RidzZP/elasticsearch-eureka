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
 * /api/v1/search/siplah:
 *   get:
 *     summary: Search Siplah products with pagination
 *     description: Search products from siplah index with optional query and pagination
 *     tags: [Siplah]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: false
 *         schema:
 *           type: string
 *         description: Search query string (searches in name, description, model, sku, isbn, manufacturer)
 *         example: buku
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number (1-based)
 *         example: 1
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results per page
 *         example: 10
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     size:
 *                       type: integer
 *                       example: 10
 *                     total:
 *                       type: integer
 *                       example: 150
 *                     totalPages:
 *                       type: integer
 *                       example: 15
 *                     hasNext:
 *                       type: boolean
 *                       example: true
 *                     hasPrev:
 *                       type: boolean
 *                       example: false
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */
router.get("/siplah", searchController.searchSiplah.bind(searchController));

/**
 * @swagger
 * /api/v1/search/siplah/all:
 *   get:
 *     summary: Get all Siplah products with pagination
 *     description: Retrieve all products from siplah index with pagination (without search query)
 *     tags: [Siplah]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number (1-based)
 *         example: 1
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results per page
 *         example: 10
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     size:
 *                       type: integer
 *                       example: 10
 *                     total:
 *                       type: integer
 *                       example: 150
 *                     totalPages:
 *                       type: integer
 *                       example: 15
 *                     hasNext:
 *                       type: boolean
 *                       example: true
 *                     hasPrev:
 *                       type: boolean
 *                       example: false
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal server error
 */
router.get("/siplah/all", searchController.getAllSiplah.bind(searchController));

/**
 * @swagger
 * /api/v1/search/siplah/{id}:
 *   get:
 *     summary: Get Siplah product by ID
 *     description: Retrieve a single product from siplah index by its ID
 *     tags: [Siplah]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID (e.g., product_123)
 *         example: product_123
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 result:
 *                   type: object
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Document not found"
 *       500:
 *         description: Internal server error
 */
router.get("/siplah/:id", searchController.getSiplahById.bind(searchController));

module.exports = router;
