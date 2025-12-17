require('dotenv').config();
const xlsx = require('xlsx');
const path = require('path');
const db = require('../src/models');

/**
 * Script untuk import data dari Excel ke database
 * 
 * Mapping kolom Excel:
 * A (0) - Item Number -> db_product.sku (validasi)
 * B (1) - Item Name -> db_product_description.name
 * C (2) - Writer -> db_product.author
 * D (3) - Curiculum -> skip
 * E (4) - Grade -> skip
 * F (5) - Segment -> skip
 * G (6) - Series -> skip
 * H (7) - Quantity -> db_product.quantity
 * I (8) - Publish Date -> skip
 * J (9) - Kelompok Bidang -> skip (set db_product_to_category.category_id = 0)
 * K (10) - Bidang -> skip
 * L (11) - Nama Pelajaran -> skip
 * M (12) - Sales Price -> db_product.price
 * N (13) - Net Weight -> db_product.weight
 * O (14) - Edisi -> skip
 * P (15) - Ukuran -> skip
 * Q (16) - Kertas -> skip
 * R (17) - Halaman -> skip
 * S (18) - ISBN -> db_product.isbn
 * 
 * Cara menggunakan:
 * node scripts/import-excel-products.js <path-to-excel-file>
 */

async function importExcel(filePath) {
    console.log('📊 Starting Excel import for products...\n');

    try {
        // Check if file exists
        if (!filePath) {
            console.error('❌ Error: Please provide Excel file path');
            console.log('Usage: node scripts/import-excel-products.js <path-to-excel-file>');
            console.log('Example: node scripts/import-excel-products.js ./data/products.xlsx\n');
            process.exit(1);
        }

        const absolutePath = path.resolve(filePath);
        console.log(`📂 Reading Excel file: ${absolutePath}\n`);

        // Read Excel file
        const workbook = xlsx.readFile(absolutePath, { cellDates: true });
        console.log(`📋 Found sheets: ${workbook.SheetNames.join(', ')}\n`);

        // Get first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        
        // Convert to JSON (header: 1 means array of arrays)
        const data = xlsx.utils.sheet_to_json(worksheet, { header: 1, defval: null });
        
        console.log(`📦 Processing sheet: ${sheetName}`);
        console.log(`   Total rows (including header): ${data.length}\n`);

        // Test database connection
        console.log('📡 Testing database connection...');
        await db.sequelize.authenticate();
        console.log('✅ Database connected successfully\n');

        let totalInserted = 0;
        let totalUpdated = 0;
        let totalFailed = 0;

        // Start from row 1 (skip header row 0)
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            
            try {
                // Mapping dari Excel
                const sku = row[0] ? String(row[0]).trim() : null;
                const name = row[1] ? String(row[1]).trim() : null;
                const author = row[2] ? String(row[2]).trim() : null;
                const quantity = row[7] ? parseInt(row[7]) : 0;
                const price = row[12] ? parseFloat(row[12]) : 0;
                const weight = row[13] ? parseFloat(row[13]) : 0;
                const isbn = row[18] ? String(row[18]).trim() : null;

                // Validasi: SKU harus ada
                if (!sku) {
                    console.log(`   ⚠️  Row ${i + 1}: SKU kosong, skip...`);
                    totalFailed++;
                    continue;
                }

                // Cek apakah produk sudah ada berdasarkan SKU
                const existingProduct = await db.DbProduct.findOne({
                    where: { sku: sku }
                });

                if (existingProduct) {
                    // Update quantity jika produk sudah ada
                    await db.DbProduct.update(
                        { quantity: quantity },
                        { where: { sku: sku } }
                    );
                    
                    totalUpdated++;
                    if (totalUpdated % 10 === 0) {
                        process.stdout.write(`\r   Updated: ${totalUpdated}, Inserted: ${totalInserted}, Failed: ${totalFailed}`);
                    }
                } else {
                    // Insert produk baru
                    const productData = {
                        model: sku, // Gunakan SKU sebagai model
                        sku: sku,
                        author: author,
                        quantity: quantity || 0,
                        price: price || 0,
                        weight: weight || 0,
                        isbn: isbn,
                        status: 1, // Status aktif
                        // Default values
                        upc: '',
                        ean: '',
                        jan: '',
                        mpn: '',
                        location: 'Indonesia',
                        stockStatusId: quantity > 0 ? 7 : 5, // 7=In Stock, 5=Out of Stock
                        image: '',
                        manufacturerId: 0,
                        shipping: 1,
                        points: 0,
                        diskon: 0,
                        taxClassId: 0,
                        dateAvailable: new Date(),
                        weightClassId: 1, // 1=Kilogram
                        length: 0,
                        width: 0,
                        height: 0,
                        lengthClassId: 1,
                        subtract: 1,
                        minimum: 1,
                        sortOrder: 0,
                        viewed: 0,
                        dateAdded: new Date(),
                        dateModified: new Date()
                    };

                    const newProduct = await db.DbProduct.create(productData);
                    const productId = newProduct.productId;

                    // Insert description
                    if (name) {
                        await db.DbProductDescription.create({
                            productId: productId,
                            languageId: 4, // Default language ID (sesuaikan dengan database)
                            name: name,
                            description: '',
                            metaDescription: '',
                            metaKeyword: '',
                            tag: '',
                            seo: name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                        });
                    }

                    // Insert category relationship
                    await db.DbProductToCategory.create({
                        productId: productId,
                        categoryId: 0
                    });

                    totalInserted++;
                    if (totalInserted % 10 === 0) {
                        process.stdout.write(`\r   Updated: ${totalUpdated}, Inserted: ${totalInserted}, Failed: ${totalFailed}`);
                    }
                }

            } catch (error) {
                totalFailed++;
                console.error(`\n   ❌ Row ${i + 1} failed:`, error.message);
            }
        }

        console.log(`\n\n🎉 Import completed!`);
        console.log(`   ✅ Inserted: ${totalInserted}`);
        console.log(`   🔄 Updated: ${totalUpdated}`);
        console.log(`   ❌ Failed: ${totalFailed}`);
        console.log(`   📊 Total processed: ${totalInserted + totalUpdated + totalFailed}\n`);

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
