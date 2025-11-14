# 🚀 Instalasi Cepat - Tanpa npm install di Local

Panduan ini menjelaskan cara setup project **tanpa perlu** menjalankan `npm install` di komputer local Anda. Semua instalasi dilakukan di dalam Docker container.

## ✅ Prerequisites

Yang Anda butuhkan hanya:
- ✅ Docker Desktop (installed & running)
- ✅ Git (optional, untuk clone project)

**TIDAK PERLU:**
- ❌ Node.js di local
- ❌ npm install di local
- ❌ Package manager lainnya

## 📦 Step-by-Step Installation

### Step 1: Pastikan Docker Desktop Running

```powershell
# Cek Docker running
docker --version
docker-compose --version
```

Jika belum terinstall, download dari: https://www.docker.com/products/docker-desktop

### Step 2: Navigate ke Project Directory

```powershell
cd C:\Users\ridzfhmi\Documents\Project\SERVICE\elasticsearch-eureka
```

### Step 3: Download MySQL JDBC Driver

Download MySQL Connector untuk Logstash:

```powershell
# Download JDBC driver
$url = "https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.2.0/mysql-connector-j-8.2.0.jar"
$output = ".\logstash\config\mysql-connector-java.jar"
Invoke-WebRequest -Uri $url -OutFile $output

Write-Host "✅ MySQL JDBC Driver downloaded successfully!"
```

### Step 4: Build & Start All Services

**Single command untuk build dan start semua services:**

```powershell
docker-compose up -d --build
```

Ini akan:
1. ✅ Build Node.js container dengan semua dependencies
2. ✅ Start Elasticsearch
3. ✅ Start Kibana
4. ✅ Start Logstash
5. ✅ Start Node.js API application

**Note:** First time build akan memakan waktu 5-10 menit karena download images dan install dependencies.

### Step 5: Tunggu Services Ready

```powershell
# Cek status semua services
docker-compose ps

# Lihat logs (optional)
docker-compose logs -f
```

Tunggu sampai semua services healthy (terutama Elasticsearch).

### Step 6: Setup Elasticsearch Indices

Jalankan setup script **di dalam Docker container**:

```powershell
# Setup indices
docker-compose exec app npm run setup:indices
```

Output yang diharapkan:
```
🔧 Setting up Elasticsearch indices...
✅ Successfully created index: products
✅ Successfully created index: users
✨ Index setup completed!
```

### Step 7: (Optional) Seed Sample Data

```powershell
# Tambah sample data untuk testing
docker-compose exec app npm run seed:products
```

### Step 8: Verify Installation

Buka browser dan akses:

- ✅ **API**: http://localhost:3000
- ✅ **Swagger Docs**: http://localhost:3000/api-docs
- ✅ **Elasticsearch**: http://localhost:9400
- ✅ **Kibana**: http://localhost:5601

Test API:
```powershell
# Test health check
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/search/health"

# Test autocomplete
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/search/products/autocomplete?q=apple"
```

## 🎯 Selesai! ✨

Project Anda sudah running lengkap dengan:
- ✅ Node.js application
- ✅ Elasticsearch dengan autocomplete indices
- ✅ Kibana untuk monitoring
- ✅ Logstash untuk data pipeline
- ✅ Swagger API documentation
- ✅ Sample data

## 📋 Useful Commands

### Docker Management

```powershell
# Stop all services
docker-compose down

# Start services (tanpa rebuild)
docker-compose up -d

# Restart specific service
docker-compose restart app

# View logs
docker-compose logs -f app
docker-compose logs -f elasticsearch

# Rebuild jika ada perubahan code
docker-compose up -d --build

# Stop dan hapus semua (termasuk volumes)
docker-compose down -v
```

### Run Scripts Inside Container

```powershell
# Setup indices
docker-compose exec app npm run setup:indices

# Seed data
docker-compose exec app npm run seed:products

# Check Elasticsearch connection
docker-compose exec app node -e "require('./src/utils/elasticsearch').checkConnection()"

# Run any npm script
docker-compose exec app npm run [script-name]
```

### Debugging

```powershell
# Enter container shell
docker-compose exec app sh

# Inside container, you can run:
# - ls (list files)
# - npm list (list installed packages)
# - node --version
# - npm --version
```

### Check Elasticsearch

```powershell
# Check cluster health
Invoke-RestMethod -Uri "http://localhost:9400/_cluster/health"

# List all indices
Invoke-RestMethod -Uri "http://localhost:9400/_cat/indices?v"

# Check products index
Invoke-RestMethod -Uri "http://localhost:9400/products/_search"
```

## 🔧 Configuration

### Edit Database Connection (Logstash)

Edit file berikut untuk connect ke MySQL database Anda:

**Products Database:**
```
logstash/pipeline/products.conf
```

**Users Database:**
```
logstash/pipeline/users.conf
```

Ubah connection details:
```conf
jdbc_connection_string => "jdbc:mysql://YOUR_DB_HOST:3306/YOUR_DATABASE"
jdbc_user => "YOUR_USER"
jdbc_password => "YOUR_PASSWORD"
```

Setelah edit, restart Logstash:
```powershell
docker-compose restart logstash
```

### Edit Environment Variables

Edit file `.env` untuk mengubah configuration:
```
NODE_ENV=development
PORT=3000
ELASTICSEARCH_HOST=elasticsearch
```

Setelah edit, restart app:
```powershell
docker-compose restart app
```

## 🐛 Troubleshooting

### Port Already in Use

Jika port sudah digunakan:
```powershell
# Cek process yang menggunakan port
netstat -ano | findstr :3000
netstat -ano | findstr :9200

# Kill process (ganti PID dengan process ID)
Stop-Process -Id PID -Force
```

Atau ubah port di `docker-compose.yml`.

### Elasticsearch Not Healthy

```powershell
# Lihat logs
docker-compose logs elasticsearch

# Restart Elasticsearch
docker-compose restart elasticsearch

# Increase memory (edit docker-compose.yml)
# ES_JAVA_OPTS=-Xms1g -Xmx1g
```

### App Container Exits

```powershell
# Lihat error logs
docker-compose logs app

# Common issues:
# 1. Elasticsearch belum ready -> tunggu beberapa saat
# 2. Syntax error di code -> check logs
# 3. Missing files -> rebuild: docker-compose up -d --build
```

### Cannot Connect to Database

Jika Logstash tidak bisa connect ke MySQL:
1. Pastikan MySQL accessible dari Docker (cek IP & port)
2. Cek credentials di pipeline config
3. Pastikan JDBC driver sudah ada di `logstash/config/`
4. Check logs: `docker-compose logs logstash`

## 📱 Development Workflow

### Membuat Perubahan Code

1. Edit file di local editor (VS Code, etc)
2. Perubahan otomatis sync ke container (via volume mount)
3. Jika menggunakan nodemon, app akan auto-restart
4. Jika tidak, restart manual:
   ```powershell
   docker-compose restart app
   ```

### Menambah npm Package

Jika perlu tambah dependency baru:

1. Edit `package.json` dan tambah package
2. Rebuild container:
   ```powershell
   docker-compose up -d --build app
   ```

Atau install langsung di container:
```powershell
docker-compose exec app npm install package-name
docker-compose exec app npm install --save package-name
```

### Hot Reload (Development Mode)

Untuk enable hot reload, edit `docker-compose.yml`:

```yaml
app:
  command: npm run dev  # Gunakan nodemon
```

Kemudian restart:
```powershell
docker-compose restart app
```

## 🎓 Next Steps

1. ✅ Buka Swagger UI: http://localhost:3000/api-docs
2. ✅ Test semua endpoints
3. ✅ Configure Logstash dengan database Anda
4. ✅ Customize indices sesuai kebutuhan
5. ✅ Baca dokumentasi lengkap di README.md

## 📚 Dokumentasi Lengkap

- **[README.md](README.md)** - Complete project documentation
- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - API reference
- **[SWAGGER_GUIDE.md](SWAGGER_GUIDE.md)** - Swagger documentation guide
- **[QUICK_START_SWAGGER.md](QUICK_START_SWAGGER.md)** - Quick start untuk Swagger

---

**🎉 Selamat! Project Anda sudah running tanpa perlu install Node.js di local!**
