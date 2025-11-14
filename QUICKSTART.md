# ⚡ Quick Start - 5 Menit Setup

Setup complete Elasticsearch + Logstash project **tanpa npm install di local**. Cukup Docker saja!

## 🎯 One-Command Setup

```powershell
# Run automated setup script
.\setup.ps1
```

Script ini akan:
1. ✅ Check Docker installation
2. ✅ Download MySQL JDBC driver
3. ✅ Build & start all Docker services
4. ✅ Wait for Elasticsearch ready
5. ✅ Create indices dengan autocomplete mapping
6. ✅ Seed sample data

**Selesai! 🎉**

## 🔧 Manual Setup (Alternative)

Jika prefer manual setup:

```powershell
# 1. Download JDBC driver
$url = "https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.2.0/mysql-connector-j-8.2.0.jar"
Invoke-WebRequest -Uri $url -OutFile ".\logstash\config\mysql-connector-java.jar"

# 2. Build & start all services
docker-compose up -d --build

# 3. Wait ~2 minutes, then setup indices
docker-compose exec app npm run setup:indices

# 4. (Optional) Add sample data
docker-compose exec app npm run seed:products
```

## 🌐 Access Services

Setelah setup:

| Service | URL | Deskripsi |
|---------|-----|-----------|
| **API** | http://localhost:3002 | REST API endpoints |
| **Swagger** | http://localhost:3002/api-docs | Interactive API docs |
| **Elasticsearch** | http://localhost:9400 | Elasticsearch cluster |
| **Kibana** | http://localhost:5601 | Data visualization |

## ✅ Test Installation

```powershell
# Test health check
Invoke-RestMethod -Uri "http://localhost:3002/api/v1/search/health"

# Test autocomplete
Invoke-RestMethod -Uri "http://localhost:3002/api/v1/search/products/autocomplete?q=apple"
```

Atau buka di browser:
- **Swagger UI**: http://localhost:3002/api-docs
- Click "Try it out" dan test langsung!

## 📋 Common Commands

```powershell
# Check status
docker-compose ps

# View logs
docker-compose logs -f app

# Restart service
docker-compose restart app

# Stop all
docker-compose down

# Start again (no rebuild)
docker-compose up -d
```

## 📚 What's Next?

1. ✅ **Test API** - Buka http://localhost:3002/api-docs
2. ✅ **Configure Database** - Edit `logstash/pipeline/*.conf`
3. ✅ **Customize Indices** - Edit `elasticsearch/mappings/*.json`
4. ✅ **Read Docs** - Check `INSTALL_DOCKER_ONLY.md` untuk detail

## 🆘 Troubleshooting

**Port sudah dipakai?**
```powershell
# Check port 3000
netstat -ano | findstr :3000

# Kill process jika perlu
Stop-Process -Id [PID] -Force
```

**Elasticsearch not ready?**
```powershell
# Check logs
docker-compose logs elasticsearch

# Restart
docker-compose restart elasticsearch
```

**Need help?**
- Read: `INSTALL_DOCKER_ONLY.md` - Complete Docker installation guide
- Read: `README.md` - Full project documentation

---

## 📁 Project Structure

```
elasticsearch-eureka/
├── setup.ps1                    # ⚡ Quick setup script (RUN THIS!)
├── docker-compose.yml           # Docker services config
├── package.json                 # Node.js dependencies
├── .env                         # Environment variables
│
├── config/                      # App configuration
│   ├── index.js                 # Main config
│   └── swagger.js               # Swagger/API docs config
│
├── src/                         # Node.js application
│   ├── index.js                 # Entry point
│   ├── controllers/             # API controllers
│   ├── routes/                  # API routes
│   ├── services/                # Business logic
│   └── utils/                   # Utilities
│
├── elasticsearch/mappings/      # Index templates
├── logstash/pipeline/           # Data pipelines
├── scripts/                     # Setup & seed scripts
│
└── docs/                        # Documentation
    ├── README.md
    ├── INSTALL_DOCKER_ONLY.md
    ├── QUICK_START_SWAGGER.md
    └── API_DOCUMENTATION.md
```

---

**🚀 Ready to start? Run `.\setup.ps1` now!**
