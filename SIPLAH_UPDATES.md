# 🔄 Siplah Index Updates - Penyesuaian dengan Model Database

## Perubahan yang Dilakukan

### ✅ **1. Penyesuaian Field dengan Model Database Asli**

Field yang digunakan sekarang disesuaikan dengan model `db_product` yang sebenarnya:

#### Fields yang Dipertahankan (dari db_product):

-   `product_id` (Primary Key)
-   `model`
-   `sku`
-   `isbn`
-   `location`
-   `quantity`
-   `image`
-   `manufacturer_id`
-   `shipping`
-   `price`
-   `weight`
-   `length`
-   `width`
-   `height`
-   `subtract`
-   `minimum`
-   `status`
-   `date_added`
-   `date_modified`
-   `viewed`
-   `mall_id`

#### Fields yang Dihapus (tidak ada di model db_product asli):

❌ Fields yang tidak ada di table sebenarnya telah dihapus dari mapping dan sync script

---

### ✅ **2. Implementasi LEFT JOIN**

Query sync sekarang menggunakan:

-   **INNER JOIN** untuk `db_product_description` (wajib ada)
-   **LEFT JOIN** untuk `db_manufacturer` (optional)
-   **LEFT JOIN** untuk `db_mall` (optional)
-   **LEFT JOIN** untuk `db_product_to_category` (optional)

```sql
SELECT
    p.product_id, p.model, p.sku, p.isbn, p.location,
    p.quantity, p.image, p.manufacturer_id,
    p.shipping, p.price,
    p.weight, p.length, p.width, p.height,
    p.subtract, p.minimum, p.status,
    p.date_added, p.date_modified, p.viewed, p.mall_id,
    pd.name, pd.description,
    mfg.manufacturer_id as mfg_id, mfg.name as mfg_name,
    mfg.slug as mfg_slug, mfg.image as mfg_image, mfg.status as mfg_status,
    m.mall_id as mall_id_ref, m.mall_code, m.name as mall_name,
    m.slug as mall_slug, m.image as mall_image
FROM db_product p
INNER JOIN db_product_description pd ON p.product_id = pd.product_id
LEFT JOIN db_manufacturer mfg ON p.manufacturer_id = mfg.manufacturer_id
LEFT JOIN db_mall m ON p.mall_id = m.mall_id
WHERE p.status = 1
LIMIT 10000
```

---

### ✅ **3. Penambahan Relasi ke db_mall**

Setiap product sekarang memiliki informasi mall (jika ada):

```json
{
    "product_id": "123",
    "name": "Buku Panduan",
    "mall": {
        "mall_id": "5",
        "mall_code": "MALL001",
        "name": "Toko Buku Gramedia",
        "slug": "toko-buku-gramedia",
        "image": "mall-image.jpg"
    }
}
```

---

### ✅ **4. Optimasi Performance**

-   **Mengurangi query database**: Dari 3-4 query per product menjadi 1 query utama dengan JOIN + 1 query optional untuk category
-   **Data sudah di-JOIN**: manufacturer dan mall langsung didapat dari main query
-   **Bulk insert tetap 100 documents**: Optimal balance antara speed dan memory

---

## 📊 Struktur Data Response Terbaru

### Product dengan Lengkap (manufacturer + mall + category):

```json
{
  "id": "product_123",
  "score": 1.0,
  "product_id": "123",
  "name": "Buku Panduan JavaScript",
  "description": "Panduan lengkap belajar JavaScript",
  "model": "BK-JS-001",
  "sku": "SKU-123",
  "isbn": "978-1234567890",
  "location": "Indonesia",
  "quantity": 100,
  "image": "book.jpg",
  "manufacturer_id": "10",
  "manufacturer": {
    "manufacturer_id": "10",
    "name": "Penerbit ABC",
    "slug": "penerbit-abc",
    "image": "publisher.jpg",
    "status": "1"
  },
  "mall_id": "5",
  "mall": {
    "mall_id": "5",
    "mall_code": "MALL001",
    "name": "Toko Buku Gramedia",
    "slug": "toko-buku-gramedia",
    "image": "mall.jpg"
  },
  "shipping": true,
  "price": 150000,
  "weight": 0.5,
  "length": 20,
  "width": 15,
  "height": 2,
  "subtract": true,
  "minimum": 1,
  "status": "1",
  "date_added": "2024-01-01T00:00:00.000Z",
  "date_modified": "2024-01-01T00:00:00.000Z",
  "viewed": 150,
  "category": {
    "value": "1",
    "parentId": "0",
    "name": "Buku",
    "slug": "buku"
  },
  "categoryChildren": [...],
  "grandCategoryChildren": [...],
  "categoryLevel": 2,
  "suggest": "Buku Panduan JavaScript",
  "@timestamp": "2025-12-17T00:00:00.000Z"
}
```

### Product tanpa manufacturer/mall (NULL fields):

```json
{
    "id": "product_456",
    "product_id": "456",
    "name": "Product Without Relations",
    "manufacturer_id": null,
    "manufacturer": null,
    "mall_id": null,
    "mall": null
}
```

---

## 🔍 Search Fields Terupdate

Search sekarang mencari di:

1. **`name^3`** (boost 3x) - Nama produk
2. **`description`** - Deskripsi produk
3. **`model`** - Model produk
4. **`sku`** - SKU produk
5. **`isbn`** - ISBN (untuk buku)
6. **`manufacturer.name^2`** (boost 2x) - Nama manufacturer/penerbit
7. **`mall.name^2`** (boost 2x) - Nama toko/mall

### Contoh Query Search:

```bash
# Cari by product name
curl "http://localhost:3000/api/v1/search/siplah?q=javascript&page=1&size=10"

# Cari by mall name
curl "http://localhost:3000/api/v1/search/siplah?q=gramedia&page=1&size=10"

# Cari by manufacturer/penerbit
curl "http://localhost:3000/api/v1/search/siplah?q=penerbit%20abc&page=1&size=10"
```

---

## 🚀 Cara Re-Sync dengan Struktur Baru

### 1. Hapus Index Lama

```bash
docker exec <container_app> curl -X DELETE "localhost:9200/siplah"
```

### 2. Setup Index Baru dengan Mapping Terupdate

```bash
docker exec <container_app> npm run setup:indices
```

### 3. Sync Data dengan Query Terupdate

```bash
docker exec <container_app> npm run sync:siplah
```

### 4. Verifikasi Data

```bash
# Check total documents
curl "http://localhost:9200/siplah/_count?pretty"

# Sample data
curl "http://localhost:3000/api/v1/search/siplah/all?page=1&size=5"
```

---

## ⚠️ Breaking Changes

1. **Field yang Dihapus**: Semua field yang tidak ada di `db_product` asli telah dihapus
2. **Category Relation**: Sekarang menggunakan `db_product_to_category` dengan LEFT JOIN
3. **Performance**: Query lebih cepat karena menggunakan JOIN daripada multiple queries
4. **Null Handling**: Manufacturer dan Mall bisa NULL jika tidak ada relasi

---

## 🎯 Keuntungan Perubahan Ini

✅ **Lebih Akurat**: Data sesuai dengan struktur database sebenarnya  
✅ **Lebih Cepat**: Mengurangi jumlah query ke database  
✅ **Lebih Robust**: LEFT JOIN memastikan data tetap ter-sync meski relasi tidak lengkap  
✅ **Lebih Lengkap**: Menambahkan informasi mall untuk setiap product  
✅ **Better Search**: User bisa search by mall name atau manufacturer name

---

## 📝 Notes

-   Index mapping sudah disesuaikan dengan field baru
-   Script sync sudah dioptimasi dengan JOIN
-   Search service sudah include mall.name dalam search fields
-   Swagger documentation tetap sama, hanya response structure yang berubah

---

**Last Updated:** December 17, 2025  
**Updated By:** AI Assistant
