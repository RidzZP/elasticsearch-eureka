# 📚 Step-by-Step Guide: Menggunakan Siplah Index di Docker

## Prerequisites

-   Docker dan Docker Compose sudah terinstall
-   Docker containers sudah berjalan (Elasticsearch, App)

## 🚀 Langkah-Langkah Penggunaan

### 1️⃣ Cek Status Docker Containers

```bash
docker ps
```

Pastikan container elasticsearch dan app sudah berjalan.

### 2️⃣ Setup Index Siplah di Elasticsearch

Masuk ke container app dan jalankan script setup indices:

```bash
# Masuk ke container app
docker exec -it <nama_container_app> bash

# Jalankan setup indices (akan membuat semua index termasuk siplah)
npm run setup:indices
```

**Atau jalankan langsung dari host:**

```bash
docker exec <nama_container_app> npm run setup:indices
```

**Output yang diharapkan:**

```
🔧 Setting up Elasticsearch indices...

📋 Processing index: siplah
✅ Successfully created index: siplah

✨ Index setup completed!
```

### 3️⃣ Sync Data dari Database ke Elasticsearch

Setelah index dibuat, sync data produk:

```bash
# Dari dalam container
npm run sync:siplah

# Atau dari host
docker exec <nama_container_app> npm run sync:siplah
```

**Output yang diharapkan:**

```
🔄 Starting Siplah data sync...

📡 Connecting to MySQL database...
✅ Connected to MySQL

📦 Syncing products from db_product...
Found 10000 products from db_product
   Processed: 10000/10000 (synced: 9850, skipped: 150)...
✅ Completed! Processed 10000 products (synced: 9850, skipped: 150)

🔄 Refreshing siplah index...
✅ Index refreshed

📊 Total documents in siplah index: 9850

🔌 Database connection closed
```

### 4️⃣ Verifikasi Index Sudah Terisi

Cek jumlah dokumen di index siplah:

```bash
# Dari dalam container
docker exec <nama_container_app> curl -X GET "localhost:9200/siplah/_count?pretty"

# Atau akses dari host (jika port exposed)
curl -X GET "localhost:9200/siplah/_count?pretty"
```

### 5️⃣ Testing API Endpoints

Setelah data berhasil di-sync, test API endpoints:

#### A. Get All Products with Pagination

```bash
# Page 1, size 10 (default)
curl "http://localhost:3000/api/v1/search/siplah/all?page=1&size=10"

# Page 2, size 20
curl "http://localhost:3000/api/v1/search/siplah/all?page=2&size=20"
```

**Response:**

```json
{
  "success": true,
  "pagination": {
    "page": 1,
    "size": 10,
    "total": 9850,
    "totalPages": 985,
    "hasNext": true,
    "hasPrev": false
  },
  "results": [...]
}
```

#### B. Search Products

```bash
# Search by keyword
curl "http://localhost:3000/api/v1/search/siplah?q=buku&page=1&size=10"

# Search laptop
curl "http://localhost:3000/api/v1/search/siplah?q=laptop&page=1&size=10"
```

#### C. Get Product by ID

```bash
curl "http://localhost:3000/api/v1/search/siplah/product_123"
```

### 6️⃣ Akses Swagger Documentation

Buka browser dan akses:

```
http://localhost:3000/api-docs
```

Di Swagger UI, Anda akan melihat section **"Siplah"** dengan 3 endpoints:

1. `GET /api/v1/search/siplah` - Search dengan pagination
2. `GET /api/v1/search/siplah/all` - Get all dengan pagination
3. `GET /api/v1/search/siplah/{id}` - Get by ID

## 📊 Struktur Data Response

### Product Data Structure

Setiap product akan memiliki struktur:

```json
{
  "id": "product_123",
  "score": 1.0,
  "product_id": "123",
  "name": "Buku Panduan JavaScript",
  "description": "Panduan lengkap belajar JavaScript",
  "category_id": "45",
  "price": 150000,
  "quantity": 100,
  "manufacturer": {
    "manufacturer_id": "10",
    "name": "Penerbit ABC",
    "slug": "penerbit-abc",
    "status": "1"
  },
  "category": {
    "value": "1",
    "parentId": "0",
    "name": "Buku",
    "slug": "buku"
  },
  "categoryChildren": [...],
  "grandCategoryChildren": [...],
  "categoryLevel": 2,
  "date_added": "2024-01-01T00:00:00.000Z",
  ...
}
```

### Category 3-Level Hierarchy

**Level 0 (Root):**

```json
{
    "category": {
        "value": "1",
        "parentId": "0",
        "name": "Elektronik",
        "slug": "elektronik"
    },
    "categoryLevel": 0
}
```

**Level 1 (Child):**

```json
{
    "category": {
        "value": "1",
        "parentId": "0",
        "name": "Elektronik",
        "slug": "elektronik"
    },
    "categoryChildren": [
        {
            "value": "2",
            "parentId": "1",
            "name": "Komputer",
            "slug": "komputer",
            "isSelected": true
        }
    ],
    "categoryLevel": 1
}
```

**Level 2 (Grandchild):**

```json
{
    "category": {
        "value": "1",
        "parentId": "0",
        "name": "Elektronik",
        "slug": "elektronik"
    },
    "categoryChildren": [
        {
            "value": "2",
            "parentId": "1",
            "name": "Komputer",
            "slug": "komputer",
            "isSelected": true
        }
    ],
    "grandCategoryChildren": [
        {
            "value": "3",
            "parentId": "2",
            "name": "Laptop",
            "slug": "laptop",
            "isSelected": true
        }
    ],
    "categoryLevel": 2
}
```

## 🔄 Re-sync Data (Update)

Jika ada perubahan data di database dan ingin sync ulang:

```bash
# Hapus index lama dan buat ulang
docker exec <nama_container_app> curl -X DELETE "localhost:9200/siplah"
docker exec <nama_container_app> npm run setup:indices
docker exec <nama_container_app> npm run sync:siplah
```

Atau untuk incremental update, jalankan sync lagi:

```bash
docker exec <nama_container_app> npm run sync:siplah
```

## 🐛 Troubleshooting

### Problem: Index sudah ada

**Error:** "Index siplah already exists"
**Solution:**

```bash
# Hapus index terlebih dahulu
docker exec <nama_container_app> curl -X DELETE "localhost:9200/siplah"
# Kemudian setup ulang
docker exec <nama_container_app> npm run setup:indices
```

### Problem: Connection refused ke Elasticsearch

**Solution:**

```bash
# Cek status Elasticsearch
docker ps | grep elasticsearch

# Cek logs Elasticsearch
docker logs <elasticsearch_container_name>

# Pastikan environment variables benar di docker-compose.yml
```

### Problem: Connection refused ke Database

**Solution:**

-   Pastikan DB_HOST, DB_USER, DB_PASS benar di environment variables
-   Cek koneksi dari container ke database:

```bash
docker exec <nama_container_app> ping <DB_HOST>
```

### Problem: Sync terlalu lama

**Solution:**

-   Script default sync 10000 products
-   Edit file `scripts/sync-siplah.js` dan ubah LIMIT di query SQL
-   Atau jalankan batch sync dengan interval waktu

## 📝 Notes

1. **Performa**: Sync 10000 products memakan waktu sekitar 5-15 menit tergantung koneksi database
2. **Memory**: Pastikan Elasticsearch memiliki cukup memory (minimal 2GB)
3. **Batch Size**: Script menggunakan bulk insert per 100 documents untuk optimasi
4. **Category Hierarchy**: Proses 3-level category menambah waktu processing, tapi memberikan struktur yang lengkap
5. **Date Fields**: Pastikan date_added tidak null untuk sorting yang proper

## 🎯 Production Checklist

-   [ ] Setup cron job untuk auto-sync berkala
-   [ ] Monitor Elasticsearch disk space
-   [ ] Setup index lifecycle management (ILM)
-   [ ] Implement error notification
-   [ ] Setup backup strategy untuk index
-   [ ] Optimize bulk size based on your data size
-   [ ] Add authentication untuk API endpoints
-   [ ] Setup rate limiting
-   [ ] Enable HTTPS
-   [ ] Configure proper logging

## 📚 Reference

-   Elasticsearch Documentation: https://www.elastic.co/guide/
-   Swagger UI: http://localhost:3000/api-docs
-   API Base URL: http://localhost:3000/api/v1/search/

---

**Created:** December 2025
**Last Updated:** December 17, 2025
