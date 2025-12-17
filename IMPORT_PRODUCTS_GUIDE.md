# Panduan Import Produk dari Excel

Script dan API untuk import data produk dari file Excel ke database `tb_2019`.

## 📋 Format Excel

File Excel harus memiliki kolom-kolom berikut (mulai dari kolom A):

| Kolom | Nama Header | Mapping Database | Keterangan |
|-------|-------------|------------------|------------|
| A | Item Number | `db_product.sku` | **Wajib** - Digunakan untuk validasi existing data |
| B | Item Name | `db_product_description.name` | Nama produk |
| C | Writer | `db_product.author` | Penulis/Author |
| D | Curiculum | - | Skip (tidak diimport) |
| E | Grade | - | Skip (tidak diimport) |
| F | Segment | - | Skip (tidak diimport) |
| G | Series | - | Skip (tidak diimport) |
| H | Quantity | `db_product.quantity` | Stok produk |
| I | Publish Date | - | Skip (tidak diimport) |
| J | Kelompok Bidang | `db_product_to_category.category_id` | Set static = 0 |
| K | Bidang | - | Skip (tidak diimport) |
| L | Nama Pelajaran | - | Skip (tidak diimport) |
| M | Sales Price | `db_product.price` | Harga jual |
| N | Net Weight | `db_product.weight` | Berat (kg) |
| O | Edisi | - | Skip (tidak diimport) |
| P | Ukuran | - | Skip (tidak diimport) |
| Q | Kertas | - | Skip (tidak diimport) |
| R | Halaman | - | Skip (tidak diimport) |
| S | ISBN | `db_product.isbn` | Nomor ISBN |

## 🔄 Logika Import

1. **Validasi**: Setiap baris harus memiliki SKU (kolom A)
2. **Cek Existing**: 
   - Jika SKU sudah ada → **UPDATE** quantity saja
   - Jika SKU baru → **INSERT** data baru ke 3 tabel:
     - `db_product`
     - `db_product_description`
     - `db_product_to_category`

## 🚀 Cara Menggunakan

### Opsi 1: Via Command Line (di dalam Docker)

```bash
# 1. Masuk ke Docker container
docker exec -it <nama-container> bash

# 2. Install dependencies (jika belum)
npm install

# 3. Generate models (jika belum)
npm run generate:models

# 4. Import dari Excel
npm run import:products /path/to/excel-file.xlsx

# Contoh:
npm run import:products ./data/products.xlsx
```

### Opsi 2: Via REST API

#### A. Download Template Excel

```bash
curl -O http://localhost:3002/api/v1/import/template
```

Atau buka di browser:
```
http://localhost:3002/api/v1/import/template
```

#### B. Upload & Import Excel

**Menggunakan cURL:**

```bash
curl -X POST http://localhost:3002/api/v1/import/products \
  -H "Content-Type: multipart/form-data" \
  -F "file=@/path/to/your-file.xlsx"
```

**Menggunakan Postman:**

1. Method: `POST`
2. URL: `http://localhost:3002/api/v1/import/products`
3. Body: 
   - Type: `form-data`
   - Key: `file` (type: File)
   - Value: Pilih file Excel

**Response:**

```json
{
  "success": true,
  "message": "Import selesai",
  "data": {
    "totalRows": 100,
    "inserted": 80,
    "updated": 15,
    "failed": 5,
    "errors": [
      {
        "row": 10,
        "message": "SKU kosong"
      }
    ]
  }
}
```

## 📖 Swagger Documentation

Akses dokumentasi Swagger di:

```
http://localhost:3002/api-docs
```

Di sana Anda dapat:
- Melihat detail API endpoints
- Test API langsung dari browser
- Download template Excel
- Upload dan import Excel

### Endpoints:

1. **POST** `/api/v1/import/products`
   - Upload file Excel untuk import produk
   - Max file size: 10MB
   - Format: .xlsx atau .xls

2. **GET** `/api/v1/import/template`
   - Download template Excel dengan format yang benar
   - Sudah include sample data

## 🔍 Default Values

Kolom yang tidak ada di Excel akan diisi dengan nilai default:

```javascript
{
  model: sku,                    // Sama dengan SKU
  status: 1,                     // Status aktif
  location: 'Indonesia',
  stockStatusId: 7 atau 5,       // 7=In Stock (qty>0), 5=Out of Stock
  manufacturerId: 0,
  shipping: 1,
  points: 0,
  diskon: 0,
  taxClassId: 0,
  weightClassId: 1,              // 1=Kilogram
  lengthClassId: 1,
  subtract: 1,
  minimum: 1,
  sortOrder: 0,
  viewed: 0,
  languageId: 4,                 // Untuk description
  categoryId: 0                  // Untuk category relationship
}
```

## ⚠️ Catatan Penting

1. **Backup Database**: Selalu backup database sebelum import data besar
2. **File Size**: Maksimal 10MB per file
3. **Format File**: Hanya accept .xlsx dan .xls
4. **Header Row**: Baris pertama (row 1) adalah header, akan di-skip
5. **SKU Wajib**: Setiap baris harus punya SKU, jika tidak akan di-skip
6. **Update Logic**: Jika SKU sudah ada, hanya quantity yang di-update
7. **Error Handling**: Maximum 10 error pertama yang ditampilkan di response

## 🐛 Troubleshooting

### Error: Models not found
```bash
npm run generate:models
```

### Error: Connection timeout
Cek konfigurasi di `.env`:
```env
DB_HOST=34.50.96.60
DB_NAME=tb_2019
DB_USER=root
DB_PASS=SipLah@2024
```

### Error: File too large
- Maximum file size adalah 10MB
- Split file Excel menjadi beberapa file lebih kecil

### Error: Invalid file format
- Pastikan file adalah .xlsx atau .xls
- Jangan gunakan format .csv

## 📁 Struktur File

```
elasticsearch-eureka/
├── config/
│   └── database.js                    # Konfigurasi database
├── scripts/
│   ├── generate-models.js             # Generate models dari DB
│   └── import-excel-products.js       # Script CLI import
├── src/
│   ├── controllers/
│   │   └── importController.js        # Controller untuk API
│   ├── models/
│   │   ├── index.js                   # Setup Sequelize
│   │   ├── db-product.js              # Model product
│   │   ├── db-product-description.js  # Model description
│   │   └── db-product-to-category.js  # Model category relation
│   └── routes/
│       └── import.js                  # Routes untuk import API
└── package.json
```

## 📊 Contoh Data Excel

| Item Number | Item Name | Writer | ... | Quantity | ... | Sales Price | Net Weight | ... | ISBN |
|-------------|-----------|--------|-----|----------|-----|-------------|------------|-----|------|
| SKU001 | Buku Matematika Kelas 1 | John Doe | ... | 100 | ... | 50000 | 0.5 | ... | 9781234567890 |
| SKU002 | Buku Bahasa Indonesia | Jane Smith | ... | 50 | ... | 45000 | 0.4 | ... | 9789876543210 |

## 🎯 Tips

1. Test dengan file kecil (10-20 rows) terlebih dahulu
2. Monitor log untuk melihat progress dan error
3. Gunakan API endpoint untuk import otomatis/terjadwal
4. Simpan file backup Excel sebelum di-import
5. Validasi data di Excel sebelum upload
