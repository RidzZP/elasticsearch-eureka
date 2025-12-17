require('dotenv').config();
const xlsx = require('xlsx');
const path = require('path');
const db = require('../src/models');

/**
 * Script untuk import data dari Excel ke database
 * 
 * Format Excel yang diharapkan:
 * - Sheet untuk db_product
 * - Sheet untuk db_product_description
 * 
 * Cara menggunakan:
 * node scripts/import-excel.js <path-to-excel-file>
 * 
 * Contoh:
 * node scripts/import-excel.js ./data/products.xlsx
 */

async function importExcel(filePath) {
    console.log('📊 Starting Excel import...\n');

    try {
        // Check if file exists
        if (!filePath) {
            console.error('❌ Error: Please provide Excel file path');
            console.log('Usage: node scripts/import-excel.js <path-to-excel-file>');
            console.log('Example: node scripts/import-excel.js ./data/products.xlsx\n');
            process.exit(1);
        }

        const absolutePath = path.resolve(filePath);
        console.log(`📂 Reading Excel file: ${absolutePath}\n`);

        // Read Excel file
        const workbook = xlsx.readFile(absolutePath);
        console.log(`📋 Found sheets: ${workbook.SheetNames.join(', ')}\n`);

        // Test database connection
        console.log('📡 Testing database connection...');
        await db.sequelize.authenticate();
        console.log('✅ Database connected successfully\n');

        let totalImported = 0;

        // Import db_product
        if (workbook.SheetNames.includes('db_product')) {
            console.log('📦 Importing db_product...');
            const sheet = workbook.Sheets['db_product'];
            const data = xlsx.utils.sheet_to_json(sheet);
            
            console.log(`   Found ${data.length} rows`);
            
            let imported = 0;
            let failed = 0;

            for (const row of data) {
                try {
                    await db.DbProduct.upsert(row);
                    imported++;
                    
                    if (imported % 100 === 0) {
                        process.stdout.write(`\r   Imported: ${imported}/${data.length}`);
                    }
                } catch (error) {
                    failed++;
                    console.error(`\n   ⚠️  Failed to import row:`, row, error.message);
                }
            }
            
            console.log(`\r   ✅ Imported ${imported} rows (${failed} failed)\n`);
            totalImported += imported;
        } else {
            console.log('⚠️  Sheet "db_product" not found, skipping...\n');
        }

        // Import db_product_description
        if (workbook.SheetNames.includes('db_product_description')) {
            console.log('📦 Importing db_product_description...');
            const sheet = workbook.Sheets['db_product_description'];
            const data = xlsx.utils.sheet_to_json(sheet);
            
            console.log(`   Found ${data.length} rows`);
            
            let imported = 0;
            let failed = 0;

            for (const row of data) {
                try {
                    await db.DbProductDescription.upsert(row);
                    imported++;
                    
                    if (imported % 100 === 0) {
                        process.stdout.write(`\r   Imported: ${imported}/${data.length}`);
                    }
                } catch (error) {
                    failed++;
                    console.error(`\n   ⚠️  Failed to import row:`, row, error.message);
                }
            }
            
            console.log(`\r   ✅ Imported ${imported} rows (${failed} failed)\n`);
            totalImported += imported;
        } else {
            console.log('⚠️  Sheet "db_product_description" not found, skipping...\n');
        }

        console.log(`\n🎉 Import completed successfully!`);
        console.log(`   Total records imported: ${totalImported}\n`);

    } catch (error) {
        console.error('❌ Error:', error.message);
        if (error.code === 'ENOENT') {
            console.error('   File not found. Please check the file path.\n');
        }
        process.exit(1);
    } finally {
        await db.sequelize.close();
    }
}

// Get file path from command line arguments
const filePath = process.argv[2];
importExcel(filePath);
