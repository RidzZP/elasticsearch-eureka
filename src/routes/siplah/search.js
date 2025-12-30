const express = require("express");
const router = express.Router();
const searchController = require("../../controllers/siplah/searchController");

/**
 * @swagger
 * /api/v1/search/siplah:
 *   get:
 *     summary: Search products in Siplah index
 *     description: Search for products in the Siplah Elasticsearch index with optional filters
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search query (optional)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *           default: 10
 *           maximum: 100
 *         description: Items per page
 *       - in: query
 *         name: mall_id
 *         schema:
 *           type: string
 *         description: Mall ID filter (optional)
 *     responses:
 *       200:
 *         description: Search results retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/siplah", searchController.search);

module.exports = router;
