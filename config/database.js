require('dotenv').config();

module.exports = {
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'tb_2019',
    dialect: process.env.DB_DIALECT || 'mysql',
    dialectOptions: {
        connectTimeout: 30000,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
};

// Konfigurasi database Siplah
module.exports.siplah = {
    host: '35.219.24.215',
    port: 3306,
    user: 'Siplah2025',
    password: '@SipLah2025!',
    database: 'lkpp_siplah2019',
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 30000,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
};
