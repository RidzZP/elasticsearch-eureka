const esClient = require("../utils/elasticsearch");
const config = require("../../config");

class SearchService {
    constructor() {
        this.client = esClient.getClient();
    }

    /**
     * Autocomplete search using match query with edge_ngram analyzer
     * @param {string} index - Index name
     * @param {string} field - Field to search
     * @param {string} query - Search query
     * @param {number} size - Number of results
     */
    async autocomplete(index, field, query, size = 10) {
        try {
            const response = await this.client.search({
                index,
                body: {
                    size,
                    query: {
                        match: {
                            [field]: {
                                query,
                                operator: "and",
                            },
                        },
                    },
                },
            });

            return {
                success: true,
                total: response.hits.total.value,
                results: response.hits.hits.map((hit) => ({
                    id: hit._id,
                    score: hit._score,
                    ...hit._source,
                })),
            };
        } catch (error) {
            console.error("Autocomplete search error:", error);
            return {
                success: false,
                error: error.message,
                results: [],
            };
        }
    }

    /**
     * Suggestion search using completion suggester
     * @param {string} index - Index name
     * @param {string} field - Suggest field name
     * @param {string} query - Search query
     * @param {number} size - Number of suggestions
     */
    async suggest(index, field, query, size = 5) {
        try {
            const response = await this.client.search({
                index,
                body: {
                    suggest: {
                        autocomplete: {
                            prefix: query,
                            completion: {
                                field,
                                size,
                                skip_duplicates: true,
                            },
                        },
                    },
                },
            });

            const suggestions = response.suggest.autocomplete[0].options;

            return {
                success: true,
                total: suggestions.length,
                results: suggestions.map((option) => ({
                    text: option.text,
                    score: option._score,
                    ...option._source,
                })),
            };
        } catch (error) {
            console.error("Suggest search error:", error);
            return {
                success: false,
                error: error.message,
                results: [],
            };
        }
    }

    /**
     * Multi-field autocomplete search
     * @param {string} index - Index name
     * @param {array} fields - Array of fields to search
     * @param {string} query - Search query
     * @param {number} size - Number of results
     */
    async multiFieldAutocomplete(index, fields, query, size = 10) {
        try {
            const response = await this.client.search({
                index,
                body: {
                    size,
                    query: {
                        multi_match: {
                            query,
                            fields,
                            type: "bool_prefix",
                            operator: "and",
                        },
                    },
                },
            });

            return {
                success: true,
                total: response.hits.total.value,
                results: response.hits.hits.map((hit) => ({
                    id: hit._id,
                    score: hit._score,
                    ...hit._source,
                })),
            };
        } catch (error) {
            console.error("Multi-field autocomplete error:", error);
            return {
                success: false,
                error: error.message,
                results: [],
            };
        }
    }

    /**
     * Advanced search with filters
     * @param {string} index - Index name
     * @param {object} searchParams - Search parameters
     */
    async advancedSearch(index, searchParams) {
        const { query, filters = {}, size = 10, from = 0, sort = [] } = searchParams;

        try {
            const must = [];
            const filter = [];

            // Add text search
            if (query) {
                must.push({
                    multi_match: {
                        query,
                        fields: ["*"],
                        type: "best_fields",
                    },
                });
            }

            // Add filters
            Object.entries(filters).forEach(([field, value]) => {
                if (Array.isArray(value)) {
                    filter.push({ terms: { [field]: value } });
                } else if (typeof value === "object" && (value.gte || value.lte)) {
                    filter.push({ range: { [field]: value } });
                } else {
                    filter.push({ term: { [field]: value } });
                }
            });

            const response = await this.client.search({
                index,
                body: {
                    size,
                    from,
                    query: {
                        bool: {
                            must: must.length > 0 ? must : [{ match_all: {} }],
                            filter,
                        },
                    },
                    sort: sort.length > 0 ? sort : [{ _score: "desc" }],
                },
            });

            return {
                success: true,
                total: response.hits.total.value,
                results: response.hits.hits.map((hit) => ({
                    id: hit._id,
                    score: hit._score,
                    ...hit._source,
                })),
            };
        } catch (error) {
            console.error("Advanced search error:", error);
            return {
                success: false,
                error: error.message,
                results: [],
            };
        }
    }
}

module.exports = new SearchService();
