module.exports = {
    elasticsearch: {
        node: `${process.env.ELASTICSEARCH_PROTOCOL || "http"}://${
            process.env.ELASTICSEARCH_HOST || "localhost"
        }:${process.env.ELASTICSEARCH_PORT || 9200}`,
        maxRetries: 5,
        requestTimeout: 60000,
        sniffOnStart: true,
    },
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || "localhost",
        apiPrefix: process.env.API_PREFIX || "/api/v1",
    },
    indices: {
        products: "products",
        users: "users",
        productEbh: "product-ebh",
    },
};
