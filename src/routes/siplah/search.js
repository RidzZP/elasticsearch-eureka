const express = require("express");
const router = express.Router();
const searchController = require("../../controllers/siplah/searchController");

/**
 * @swagger
 * /api/v1/siplah/satdik/product:
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
router.get("/satdik/product", searchController.search);

/**
 * @swagger
 * /api/v1/siplah/satdik/provider:
 *   get:
 *     summary: Search providers in Siplah-Providers index
 *     description: Search for providers/merchants in the Siplah-Providers Elasticsearch index. Results are sorted by registration date (newest first).
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search query (optional) - searches in company name, brand name, mall code, and PIC name
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
 *     responses:
 *       200:
 *         description: Providers search results retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Mall ID
 *                       code:
 *                         type: string
 *                         description: Mall code
 *                       type:
 *                         type: object
 *                         description: Mall type information
 *                       name:
 *                         type: string
 *                         description: Company name or brand name
 *                       slug:
 *                         type: string
 *                         description: URL slug
 *                       images:
 *                         type: string
 *                         description: Provider image
 *                       namaPic:
 *                         type: string
 *                         description: Person in charge name
 *                       jenis:
 *                         type: string
 *                         description: Provider type
 *                       jenisUsaha:
 *                         type: string
 *                         description: Business type
 *                       address:
 *                         type: string
 *                         description: Full address
 *                       province:
 *                         type: string
 *                         description: Province
 *                       city:
 *                         type: string
 *                         description: City
 *                       zone:
 *                         type: string
 *                         description: Zone/District
 *                       subdistrict:
 *                         type: string
 *                         description: Subdistrict/Kelurahan
 *                       postCode:
 *                         type: string
 *                         description: Postal code
 *                       lat:
 *                         type: number
 *                         format: float
 *                         description: Latitude
 *                       lon:
 *                         type: number
 *                         format: float
 *                         description: Longitude
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     size:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/satdik/provider", searchController.searchProviders);

module.exports = router;
