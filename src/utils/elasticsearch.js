const { Client } = require("@elastic/elasticsearch");
const config = require("../../config");

class ElasticsearchClient {
    constructor() {
        this.client = new Client({
            node: config.elasticsearch.node,
            maxRetries: config.elasticsearch.maxRetries,
            requestTimeout: config.elasticsearch.requestTimeout,
            sniffOnStart: config.elasticsearch.sniffOnStart,
        });
    }

    getClient() {
        return this.client;
    }

    async checkConnection() {
        try {
            const health = await this.client.cluster.health();
            console.log("✅ Elasticsearch connection established");
            console.log(`Cluster status: ${health.status}`);
            return true;
        } catch (error) {
            console.error("❌ Elasticsearch connection failed:", error.message);
            return false;
        }
    }

    async indexExists(index) {
        try {
            return await this.client.indices.exists({ index });
        } catch (error) {
            console.error(`Error checking index ${index}:`, error.message);
            return false;
        }
    }

    async createIndex(index, body) {
        try {
            await this.client.indices.create({
                index,
                body,
            });
            console.log(`✅ Index ${index} created successfully`);
            return true;
        } catch (error) {
            if (error.meta?.body?.error?.type === "resource_already_exists_exception") {
                console.log(`ℹ️ Index ${index} already exists`);
                return true;
            }
            console.error(`❌ Error creating index ${index}:`, error.message);
            return false;
        }
    }

    async deleteIndex(index) {
        try {
            await this.client.indices.delete({ index });
            console.log(`✅ Index ${index} deleted successfully`);
            return true;
        } catch (error) {
            console.error(`❌ Error deleting index ${index}:`, error.message);
            return false;
        }
    }

    async getIndexMappings(index) {
        try {
            const response = await this.client.indices.getMapping({ index });
            return response;
        } catch (error) {
            console.error(`❌ Error getting mappings for index ${index}:`, error.message);
            return null;
        }
    }

    async getIndexSettings(index) {
        try {
            const response = await this.client.indices.getSettings({ index });
            return response;
        } catch (error) {
            console.error(`❌ Error getting settings for index ${index}:`, error.message);
            return null;
        }
    }
}

module.exports = new ElasticsearchClient();
