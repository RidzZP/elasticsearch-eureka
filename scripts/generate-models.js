require('dotenv').config();
const SequelizeAuto = require('sequelize-auto');
const path = require('path');

const dbConfig = require('../config/database');

async function generateModels() {
    console.log('🔄 Starting model generation from database...\n');
    
    const auto = new SequelizeAuto(dbConfig.database, dbConfig.user, dbConfig.password, {
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        directory: path.join(__dirname, '../src/models'),
        caseModel: 'p', // PascalCase for model names
        caseFile: 'k', // kebab-case for file names
        caseProp: 'c', // camelCase for properties
        singularize: true,
        tables: ['db_product', 'db_product_description', 'db_product_to_category'], // Only generate these 2 tables
        additional: {
            timestamps: false
        },
        lang: 'js'
    });

    try {
        console.log('📡 Connecting to database...');
        console.log(`   Host: ${dbConfig.host}`);
        console.log(`   Database: ${dbConfig.database}`);
        console.log(`   Tables: db_product, db_product_description\n`);

        await auto.run();

        console.log('✅ Models generated successfully!');
        console.log(`   Location: ${path.join(__dirname, '../src/models')}\n`);
        console.log('📋 Generated models:');
        console.log('   - db_product');
        console.log('   - db_product_description\n');
    } catch (error) {
        console.error('❌ Error generating models:', error.message);
        process.exit(1);
    }
}

generateModels();
