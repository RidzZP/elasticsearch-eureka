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
            const { q = "", page = 1, size = 10, mall_id } = req.query;

            // Validate pagination parameters
            const pageNum = parseInt(page) > 0 ? parseInt(page) : 1;
            const sizeNum =
                parseInt(size) > 0 && parseInt(size) <= 100 ? parseInt(size) : 10;

            // Execute search
            const result = await searchService.searchProducts(
                q,
                pageNum,
                sizeNum,
                mall_id
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
}

module.exports = new SiplahSearchController();
