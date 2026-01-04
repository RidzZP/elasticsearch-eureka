const searchService = require("../../services/siplah/searchService");

class SiplahSearchController {
    /**
     * Search products in Siplah
     * @route GET /api/v1/search/siplah
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async search(req, res) {
        try {
            const {
                q = "",
                page = 1,
                size = 10,
                mall_id,
                min_price,
                max_price,
                min_rating,
                max_rating,
                manufacturer_id,
                province,
                availability,
                produksi,
                category_id,
            } = req.query;

            // Validate pagination parameters
            const pageNum = parseInt(page) > 0 ? parseInt(page) : 1;
            const sizeNum =
                parseInt(size) > 0 && parseInt(size) <= 100 ? parseInt(size) : 10;

            // Build filters object
            const filters = {
                mallId: mall_id || undefined,
                minPrice: min_price ? parseFloat(min_price) : undefined,
                maxPrice: max_price ? parseFloat(max_price) : undefined,
                minRating: min_rating ? parseFloat(min_rating) : undefined,
                maxRating: max_rating ? parseFloat(max_rating) : undefined,
                manufacturerId: manufacturer_id || undefined,
                province: province || undefined,
                availability: availability || undefined,
                produksi: produksi || undefined,
                categoryId: category_id || undefined,
            };

            // Execute search
            const result = await searchService.searchProducts(
                q,
                pageNum,
                sizeNum,
                filters
            );

            return res.status(200).json(result);
        } catch (error) {
            console.error("Controller error:", error);
            return res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
                error: process.env.NODE_ENV === "development" ? error.error : undefined,
            });
        }
    }

    /**
     * Search providers in Siplah
     * @route GET /api/v1/search/siplah/providers
     * @param {Request} req - Express request object
     * @param {Response} res - Express response object
     */
    async searchProviders(req, res) {
        try {
            const { q = "", page = 1, size = 10 } = req.query;

            // Validate pagination parameters
            const pageNum = parseInt(page) > 0 ? parseInt(page) : 1;
            const sizeNum =
                parseInt(size) > 0 && parseInt(size) <= 100 ? parseInt(size) : 10;

            // Execute search
            const result = await searchService.searchProviders(q, pageNum, sizeNum);

            return res.status(200).json(result);
        } catch (error) {
            console.error("Controller error:", error);
            return res.status(500).json({
                success: false,
                message: error.message || "Internal server error",
                error: process.env.NODE_ENV === "development" ? error.error : undefined,
            });
        }
    }
}

module.exports = new SiplahSearchController();
