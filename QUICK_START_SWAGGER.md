# 📖 Quick Start Guide - Swagger Documentation

Selamat datang! Ini adalah panduan cepat untuk menggunakan Swagger API Documentation pada project Elasticsearch Autocomplete Service.

## 🎯 Apa itu Swagger?

Swagger adalah tool untuk dokumentasi API yang interaktif. Dengan Swagger, Anda dapat:

-   ✅ Melihat semua endpoint API yang tersedia
-   ✅ Membaca dokumentasi lengkap setiap endpoint
-   ✅ Menguji API secara langsung dari browser
-   ✅ Melihat contoh request dan response

## 🚀 Cara Mengakses Swagger

### Step 1: Start Server

Pastikan server sudah berjalan:

```powershell
# Jika menggunakan Docker
docker-compose up -d

# Atau jika running locally
npm start
```

### Step 2: Buka Browser

Buka browser dan navigasi ke:

```
http://localhost:3002/api-docs
```

### Step 3: Explore API

Anda akan melihat halaman Swagger UI dengan daftar semua endpoint!

## 🎨 Menggunakan Swagger UI

### 1️⃣ Melihat Daftar Endpoint

-   Halaman Swagger UI menampilkan semua endpoint yang dikelompokkan berdasarkan kategori (Tags)
-   **Health** - Endpoint untuk health check
-   **Products** - Endpoint untuk search products
-   **Users** - Endpoint untuk search users

### 2️⃣ Membuka Detail Endpoint

1. Klik pada endpoint yang ingin Anda lihat
2. Panel akan expand menampilkan:
    - Deskripsi endpoint
    - Parameter yang dibutuhkan
    - Format request body
    - Contoh response
    - Possible error responses

### 3️⃣ Menguji Endpoint (Try it out!)

**Contoh: Menguji Product Autocomplete**

1. Klik pada **GET** `/api/v1/search/products/autocomplete`
2. Panel akan expand
3. Klik tombol **"Try it out"** di kanan atas
4. Field parameter akan menjadi editable
5. Isi parameter:
    - `q`: `apple` (kata yang ingin dicari)
    - `size`: `10` (jumlah hasil)
6. Klik tombol **"Execute"** (biru)
7. Scroll ke bawah untuk melihat response!

**Response yang Anda lihat:**

-   **Server response** - Response body dalam format JSON
-   **Response headers** - HTTP headers dari response
-   **Request URL** - URL lengkap yang dipanggil
-   **Curl command** - Command curl yang bisa Anda copy

### 4️⃣ Menguji POST Endpoint

**Contoh: Advanced Search Products**

1. Klik pada **POST** `/api/v1/search/products/advanced`
2. Klik **"Try it out"**
3. Edit request body di text area:

```json
{
    "query": "apple",
    "filters": {
        "category": "electronics",
        "price": {
            "gte": 100,
            "lte": 1000
        }
    },
    "size": 10,
    "from": 0,
    "sort": [
        {
            "price": "asc"
        }
    ]
}
```

4. Klik **"Execute"**
5. Lihat hasilnya di bawah!

## 📋 Contoh Use Cases

### Use Case 1: Testing Autocomplete

**Scenario**: Anda ingin test apakah autocomplete bekerja dengan baik

1. Buka `/api/v1/search/products/autocomplete`
2. Try it out dengan query: `app`
3. Cek apakah hasil termasuk "Apple iPhone", "Apple MacBook", dll
4. Ubah query menjadi `appl` dan test lagi
5. Perhatikan perbedaan hasilnya

### Use Case 2: Testing Filters

**Scenario**: Anda ingin filter products by category dan price range

1. Buka `/api/v1/search/products/advanced`
2. Gunakan request body:

```json
{
    "query": "",
    "filters": {
        "category": "electronics",
        "price": {
            "gte": 500,
            "lte": 1500
        }
    },
    "size": 20
}
```

3. Execute dan lihat hanya products dalam price range tersebut

### Use Case 3: Testing Pagination

**Scenario**: Anda ingin test pagination

1. Buka `/api/v1/search/products/advanced`
2. First page:

```json
{
    "query": "apple",
    "size": 5,
    "from": 0
}
```

3. Second page:

```json
{
    "query": "apple",
    "size": 5,
    "from": 5
}
```

4. Perhatikan hasil yang berbeda

## 🎯 Tips & Tricks

### Tip 1: Copy cURL Command

Setelah execute, scroll ke bawah dan copy cURL command. Anda bisa paste di terminal:

```bash
curl -X 'GET' \
  'http://localhost:3002/api/v1/search/products/autocomplete?q=apple&size=10' \
  -H 'accept: application/json'
```

### Tip 2: Schema Reference

Di bagian bawah Swagger UI, ada section **Schemas** yang menunjukkan struktur data lengkap:

-   Product schema
-   User schema
-   Request/Response formats

### Tip 3: Testing Error Cases

Coba test dengan data invalid untuk melihat error responses:

-   Kosongkan required parameter
-   Gunakan format yang salah
-   Lihat error message yang dikembalikan

### Tip 4: Save Examples

Swagger UI memiliki contoh request yang bisa Anda gunakan. Klik dropdown "Example Value" untuk memilih contoh yang berbeda.

## 🔧 Troubleshooting

### Swagger UI Tidak Muncul

**Problem**: Halaman kosong atau error 404

**Solution**:

1. Cek apakah server running: `docker-compose ps`
2. Cek port 3000 tidak digunakan aplikasi lain
3. Restart server: `docker-compose restart app`

### Endpoint Tidak Merespon

**Problem**: Execute button tidak memberikan hasil

**Solution**:

1. Cek Elasticsearch running: http://localhost:9400
2. Cek logs: `docker-compose logs app`
3. Pastikan index sudah dibuat: `npm run setup:indices`

### CORS Error

**Problem**: Error CORS di browser console

**Solution**:

-   Server sudah configured dengan CORS
-   Jika masih error, restart server

## 📱 Alternative Testing Methods

### 1. Postman

Import Postman collection yang tersedia:

```
File: postman_collection.json
```

### 2. VS Code REST Client

Install extension "REST Client" dan buat file `.http`:

```http
GET http://localhost:3002/api/v1/search/products/autocomplete?q=apple
```

### 3. PowerShell

```powershell
Invoke-RestMethod -Uri "http://localhost:3002/api/v1/search/products/autocomplete?q=apple" -Method Get
```

### 4. Browser

Untuk GET requests, langsung paste URL di browser:

```
http://localhost:3002/api/v1/search/products/autocomplete?q=apple
```

## 📚 Dokumentasi Lengkap

Untuk dokumentasi lebih detail, baca:

1. **[README.md](README.md)** - Setup & Installation
2. **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - Complete API Reference
3. **[SWAGGER_GUIDE.md](SWAGGER_GUIDE.md)** - Advanced Swagger Usage
4. **Swagger UI** - http://localhost:3002/api-docs

## ❓ FAQ

**Q: Apakah saya perlu authentication?**
A: Tidak, saat ini API open tanpa authentication.

**Q: Apakah changes langsung terlihat di Swagger?**
A: Ya, setelah restart server, semua perubahan akan terlihat.

**Q: Bisa export Swagger documentation?**
A: Ya, Anda bisa export JSON spec untuk import ke tools lain.

**Q: Bagaimana cara menambah endpoint baru ke Swagger?**
A: Tambahkan JSDoc comments di route file. Lihat SWAGGER_GUIDE.md untuk detail.

## 🎓 Next Steps

1. ✅ Buka Swagger UI
2. ✅ Try semua endpoint satu per satu
3. ✅ Experiment dengan different parameters
4. ✅ Check response formats
5. ✅ Import Postman collection
6. ✅ Read API_DOCUMENTATION.md untuk contoh advanced

---

**Selamat mencoba! 🚀**

Jika ada pertanyaan, lihat dokumentasi lengkap atau check logs untuk debugging.
