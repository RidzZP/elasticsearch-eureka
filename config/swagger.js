const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Elasticsearch Autocomplete Service API",
            version: "1.0.0",
            description:
                "A scalable Elasticsearch service with Logstash data pipeline, designed for autocomplete functionality",
            contact: {
                name: "API Support",
                email: "support@example.com",
            },
            license: {
                name: "MIT",
                url: "https://opensource.org/licenses/MIT",
            },
        },
        servers: [
            {
                url: "http://localhost:3002",
                description: "Development server",
            },
            {
                url: "http://localhost:3002/api/v1",
                description: "API v1",
            },
        ],
        tags: [
            {
                name: "Health",
                description: "Health check endpoints",
            },
            {
                name: "Products",
                description: "Product search and autocomplete endpoints",
            },
            {
                name: "Users",
                description: "User search and autocomplete endpoints",
            },
        ],
        components: {
            schemas: {
                SuccessResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: true,
                        },
                        total: {
                            type: "integer",
                            example: 5,
                        },
                        results: {
                            type: "array",
                            items: {
                                type: "object",
                            },
                        },
                    },
                },
                ErrorResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: false,
                        },
                        message: {
                            type: "string",
                            example: "Error message",
                        },
                        error: {
                            type: "string",
                            example: "Detailed error message",
                        },
                    },
                },
                Product: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            example: "1",
                        },
                        name: {
                            type: "string",
                            example: "Apple iPhone 15 Pro",
                        },
                        description: {
                            type: "string",
                            example: "Latest flagship smartphone with advanced features",
                        },
                        category: {
                            type: "string",
                            example: "electronics",
                        },
                        price: {
                            type: "number",
                            format: "float",
                            example: 999.99,
                        },
                        suggest: {
                            type: "string",
                            example: "Apple iPhone 15 Pro",
                        },
                        created_at: {
                            type: "string",
                            format: "date-time",
                        },
                        updated_at: {
                            type: "string",
                            format: "date-time",
                        },
                        score: {
                            type: "number",
                            format: "float",
                            example: 1.5,
                        },
                    },
                },
                User: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            example: "1",
                        },
                        username: {
                            type: "string",
                            example: "johndoe",
                        },
                        email: {
                            type: "string",
                            format: "email",
                            example: "john.doe@example.com",
                        },
                        first_name: {
                            type: "string",
                            example: "John",
                        },
                        last_name: {
                            type: "string",
                            example: "Doe",
                        },
                        full_name: {
                            type: "string",
                            example: "John Doe",
                        },
                        suggest: {
                            type: "string",
                            example: "johndoe",
                        },
                        created_at: {
                            type: "string",
                            format: "date-time",
                        },
                        updated_at: {
                            type: "string",
                            format: "date-time",
                        },
                        score: {
                            type: "number",
                            format: "float",
                            example: 1.5,
                        },
                    },
                },
                AdvancedSearchRequest: {
                    type: "object",
                    properties: {
                        query: {
                            type: "string",
                            example: "apple",
                            description: "Search query text",
                        },
                        filters: {
                            type: "object",
                            description: "Filters to apply",
                            example: {
                                category: "electronics",
                                price: {
                                    gte: 100,
                                    lte: 1000,
                                },
                            },
                        },
                        size: {
                            type: "integer",
                            example: 10,
                            default: 10,
                            description: "Number of results to return",
                        },
                        from: {
                            type: "integer",
                            example: 0,
                            default: 0,
                            description: "Offset for pagination",
                        },
                        sort: {
                            type: "array",
                            items: {
                                type: "object",
                            },
                            example: [{ price: "asc" }],
                            description: "Sort criteria",
                        },
                    },
                },
                HealthResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                            example: true,
                        },
                        elasticsearch: {
                            type: "string",
                            example: "connected",
                        },
                        timestamp: {
                            type: "string",
                            format: "date-time",
                        },
                    },
                },
            },
        },
    },
    apis: ["./src/routes/*.js", "./src/controllers/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = {
    specs,
    swaggerUi,
};
