# Panduan Import Data Excel ke Database

Script ini digunakan untuk melakukan import data dari file Excel ke tabel `db_product` dan `db_product_description` di database `tb_2019`.

## Langkah-langkah

### 1. Install Dependencies di Docker

Masuk ke dalam Docker container dan install dependencies:

```bash
# Masuk ke container Docker
docker exec -it <nama-container> bash

# Install dependencies
npm install
```

### 2. Generate Models dari Database

Jalankan script untuk generate models dari database:

```bash
npm run generate:models
```

Script ini akan:
- Membaca struktur tabel `db_product` dan `db_product_description` dari database
- Generate file model di folder `src/models/`
- File yang dihasilkan:
  - `src/models/db-product.js`
  - `src/models/db-product-description.js`
  - `src/models/index.js` (sudah dibuat, untuk konfigurasi)

### 3. Siapkan File Excel

Format file Excel yang diperlukan:

#### Sheet: `db_product`
Kolom harus sesuai dengan struktur tabel di database, contoh:
- product_id
- model
- sku
- upc
- ean
- jan
- isbn
- mpn
- location
- quantity
- stock_status_id
- image
- manufacturer_id
- shipping
- price
- points
- tax_class_id
- date_available
- weight
- weight_class_id
- length
- width
- height
- length_class_id
- subtract
- minimum
- sort_order
- status
- viewed
- date_added
- date_modified

#### Sheet: `db_product_description`
Kolom harus sesuai dengan struktur tabel di database, contoh:
- product_id
- language_id
- name
- description
- tag
- meta_title
- meta_description
- meta_keyword

**Catatan:** Nama sheet di Excel harus **persis** `db_product` dan `db_product_description`

### 4. Import Data dari Excel

Jalankan script import dengan menyertakan path ke file Excel:

```bash
npm run import:excel /path/to/your/excel-file.xlsx
```

Atau:

```bash
node scripts/import-excel.js /path/to/your/excel-file.xlsx
```

**Contoh:**
```bash
# Jika file Excel ada di folder data
npm run import:excel ./data/products.xlsx

# Jika file Excel ada di folder lain
npm run import:excel /home/user/downloads/products.xlsx
```

### Output Script

Script akan menampilkan progress seperti:

```
📊 Starting Excel import...

📂 Reading Excel file: /path/to/products.xlsx

📋 Found sheets: db_product, db_product_description

📡 Testing database connection...
✅ Database connected successfully

📦 Importing db_product...
   Found 1000 rows
   ✅ Imported 1000 rows (0 failed)

📦 Importing db_product_description...
   Found 1000 rows
   ✅ Imported 1000 rows (0 failed)

🎉 Import completed successfully!
   Total records imported: 2000
```

## Troubleshooting

### Error: Models not found
Pastikan Anda sudah menjalankan `npm run generate:models` terlebih dahulu.

### Error: Sheet not found
Pastikan nama sheet di Excel adalah `db_product` dan `db_product_description` (case-sensitive).

### Error: Connection timeout
Pastikan konfigurasi database di `.env` sudah benar:
```env
DB_HOST=34.50.96.60
DB_NAME=tb_2019
DB_USER=root
DB_PASS=SipLah@2024
```

### Data tidak ter-import
- Periksa format kolom di Excel apakah sesuai dengan struktur tabel
- Periksa apakah ada constraint (foreign key, unique, dll) yang dilanggar
- Lihat error message yang ditampilkan script

## Struktur File

```
elasticsearch-eureka/
├── config/
│   └── database.js          # Konfigurasi database Sequelize
├── scripts/
│   ├── generate-models.js   # Script untuk generate models
│   └── import-excel.js      # Script untuk import dari Excel
└── src/
    └── models/
        ├── index.js         # Konfigurasi models
        ├── db-product.js    # Model db_product (generated)
        └── db-product-description.js  # Model db_product_description (generated)
```

## Tips

1. **Backup database** sebelum melakukan import data
2. Gunakan `upsert` (update or insert) untuk menghindari duplicate data
3. Test dengan file Excel kecil terlebih dahulu sebelum import data besar
4. Monitor log untuk melihat jika ada data yang gagal di-import
