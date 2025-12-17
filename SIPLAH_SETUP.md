# Setup Model Siplah Database

## Generate Models dari Database Siplah

Script ini akan mengekstrak semua tabel dari database **lkpp_siplah2019** dan membuat model Sequelize di folder `src/models/siplah`.

### Konfigurasi Database
- Host: `35.219.24.215`
- User: `Siplah2025`
- Password: `@SipLah2025!`
- Database: `lkpp_siplah2019`

### Cara Menjalankan dengan Docker

```bash
docker exec -it <container-name> npm run generate:models:siplah
```

**Contoh:**
```bash
docker exec -it elasticsearch-eureka npm run generate:models:siplah
```

### Output
Models akan digenerate di: `src/models/siplah/`

Semua tabel dari database `lkpp_siplah2019` akan otomatis diconvert menjadi model Sequelize.
