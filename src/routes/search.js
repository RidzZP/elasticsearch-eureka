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
 * /api/v1/search/indices/{index}/info:
 *   get:
 *     summary: Get index mappings and settings
 *     description: Retrieve the mappings and settings configuration for a specific Elasticsearch index
 *     tags: [Indices]
 *     parameters:
 *       - in: path
 *         name: index
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the Elasticsearch index
 *         example: siplah
 *     responses:
 *       200:
 *         description: Index information retrieved successfully
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
 *                   example: "siplah"
 *                 mappings:
 *                   type: object
 *                   description: Index mappings configuration
 *                   example: {
 *                     "properties": {
 *                       "product_id": {
 *                         "type": "keyword"
 *                       },
 *                       "name": {
 *                         "type": "text"
 *                       }
 *                     }
 *                   }
 *                 settings:
 *                   type: object
 *                   description: Index settings configuration
 *                   example: {
 *                     "index": {
 *                       "number_of_shards": "1",
 *                       "number_of_replicas": "1"
 *                     }
 *                   }
 *       404:
 *         description: Index not found
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
router.get("/indices/:index/info", searchController.getIndexInfo.bind(searchController));

/**
 * @swagger
 * /api/v1/search/indices/{index}:
 *   delete:
 *     summary: Delete an Elasticsearch index
 *     description: Delete a specific Elasticsearch index and all its data. This action cannot be undone.
 *     tags: [Indices]
 *     parameters:
 *       - in: path
 *         name: index
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the Elasticsearch index to delete
 *         example: siplah
 *     responses:
 *       200:
 *         description: Index deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Index \"siplah\" deleted successfully"
 *                 index:
 *                   type: string
 *                   example: "siplah"
 *       404:
 *         description: Index not found
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
router.delete("/indices/:index", searchController.deleteIndex.bind(searchController));

/**
 * @swagger
 * /api/v1/search/indices/setup:
 *   post:
 *     summary: Re-run index setup
 *     description: Re-run the index setup process to create or recreate all Elasticsearch indices based on the mapping templates. This will create indices that don't exist, but will skip existing ones.
 *     tags: [Indices]
 *     responses:
 *       200:
 *         description: Index setup completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Index setup completed successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/indices/setup", searchController.setupIndices.bind(searchController));

/**
 * @swagger
 * /api/v1/search/sync/siplah:
 *   post:
 *     summary: Run Siplah data synchronization
 *     description: Synchronize data from Siplah database to Elasticsearch siplah index. This process will sync products and related data from the MySQL database to Elasticsearch.
 *     tags: [Sync]
 *     responses:
 *       200:
 *         description: Siplah data sync completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Siplah data sync completed successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/sync/siplah", searchController.syncSiplah.bind(searchController));

/**
 * @swagger
 * /api/v1/search/sync/siplah-providers:
 *   post:
 *     summary: Run Siplah providers synchronization
 *     description: Synchronize provider data from Siplah database to Elasticsearch siplah-providers index. This process will sync mall/provider data from the MySQL database to Elasticsearch.
 *     tags: [Sync]
 *     responses:
 *       200:
 *         description: Siplah providers sync completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Siplah providers sync completed successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
    "/sync/siplah-providers",
    searchController.syncSiplahProviders.bind(searchController)
);

/**
 * @swagger
 * /api/v1/search/sync/eurekabookhouse:
 *   post:
 *     summary: Run Eureka Bookhouse data synchronization
 *     description: Synchronize data from Eureka Bookhouse database to Elasticsearch product-ebh index. This process will sync products and related data from the MySQL database to Elasticsearch.
 *     tags: [Sync]
 *     responses:
 *       200:
 *         description: Eureka Bookhouse data sync completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Eureka Bookhouse data sync completed successfully"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
    "/sync/eurekabookhouse",
    searchController.syncEurekaBookhouse.bind(searchController)
);

/**
 * @swagger
 * /api/v1/search/sync/{syncType}/stop:
 *   post:
 *     summary: Stop a running sync operation
 *     description: Send a stop signal to a running sync operation. The sync will complete the current batch and then stop gracefully.
 *     tags: [Sync]
 *     parameters:
 *       - in: path
 *         name: syncType
 *         required: true
 *         schema:
 *           type: string
 *           enum: [siplah, eurekabookhouse]
 *         description: Type of sync operation to stop
 *         example: siplah
 *     responses:
 *       200:
 *         description: Stop signal sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Sync siplah stop signal sent successfully"
 *                 syncType:
 *                   type: string
 *                   example: "siplah"
 *       400:
 *         description: Invalid sync type or sync not running
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
router.post("/sync/:syncType/stop", searchController.stopSync.bind(searchController));

/**
 * @swagger
 * /api/v1/search/sync/status:
 *   get:
 *     summary: Get sync operations status
 *     description: Retrieve the current status of all sync operations, including whether they are running, stopped, or not started.
 *     tags: [Sync]
 *     responses:
 *       200:
 *         description: Sync status retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 statuses:
 *                   type: object
 *                   properties:
 *                     siplah:
 *                       type: object
 *                       properties:
 *                         syncType:
 *                           type: string
 *                           example: "siplah"
 *                         status:
 *                           type: string
 *                           enum: [running, stopped, not_running]
 *                           example: "running"
 *                         startedAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2023-12-30T10:00:00.000Z"
 *                         stoppedAt:
 *                           type: string
 *                           format: date-time
 *                           example: null
 *                         duration:
 *                           type: number
 *                           example: 15000
 *                     eurekabookhouse:
 *                       type: object
 *                       description: Same structure as siplah
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/sync/status", searchController.getSyncStatus.bind(searchController));

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
module.exports = router;
