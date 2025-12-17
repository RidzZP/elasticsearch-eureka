require('dotenv').config();
const { Sequelize } = require('sequelize');
const dbConfig = require('../../config/database');

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        dialectOptions: dbConfig.dialectOptions,
        pool: dbConfig.pool,
        logging: dbConfig.logging
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models dynamically after they are generated
try {
    db.DbProduct = require('./db-product')(sequelize, Sequelize.DataTypes);
    db.DbProductDescription = require('./db-product-description')(sequelize, Sequelize.DataTypes);
    db.DbProductToCategory = require('./db-product-to-category')(sequelize, Sequelize.DataTypes);
} catch (error) {
    console.log('Models not yet generated. Run: npm run generate:models');
}

module.exports = db;
