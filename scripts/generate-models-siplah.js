require('dotenv').config();
const SequelizeAuto = require('sequelize-auto');
const path = require('path');

const dbConfig = require('../config/database');

async function generateModelsSiplah() {
    console.log('🔄 Starting model generation from Siplah database...\n');
    
    const auto = new SequelizeAuto(
        dbConfig.siplah.database, 
        dbConfig.siplah.user, 
        dbConfig.siplah.password, 
        {
            host: dbConfig.siplah.host,
            port: dbConfig.siplah.port,
            dialect: dbConfig.siplah.dialect,
            directory: path.join(__dirname, '../src/models/siplah'),
            caseModel: 'p', // PascalCase for model names
            caseFile: 'k', // kebab-case for file names
            caseProp: 'c', // camelCase for properties
            singularize: true,
            additional: {
                timestamps: false
            },
            lang: 'js'
        }
    );

    try {
        console.log('📡 Connecting to Siplah database...');
        console.log(`   Host: ${dbConfig.siplah.host}`);
        console.log(`   Database: ${dbConfig.siplah.database}\n`);

        await auto.run();

        console.log('✅ Models generated successfully!');
        console.log(`   Location: ${path.join(__dirname, '../src/models/siplah')}\n`);
        console.log('📋 All tables from lkpp_siplah2019 have been exported as models.\n');
    } catch (error) {
        console.error('❌ Error generating models:', error.message);
        console.error('   Full error:', error);
        process.exit(1);
    }
}

generateModelsSiplah();
