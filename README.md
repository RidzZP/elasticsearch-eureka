# Elasticsearch Autocomplete Service

A scalable **Elasticsearch** service with **Logstash** data pipeline, designed for autocomplete functionality. This project serves as a service layer containing multiple indices that can retrieve data from different databases hosted on various VM IPs.

## 📋 Features

-   ✅ **Docker-based deployment** with Node.js, Elasticsearch, Logstash, and Kibana
-   ✅ **Autocomplete search** using edge_ngram tokenizer
-   ✅ **Multiple indices support** (products, users, and extensible)
-   ✅ **Logstash pipelines** for JDBC data ingestion from external MySQL databases
-   ✅ **RESTful API** with Express.js
-   ✅ **Swagger/OpenAPI documentation** for interactive API testing
-   ✅ **Completion suggester** for fast autocomplete
-   ✅ **Multi-field search** capabilities
-   ✅ **Clean and scalable architecture**

## 🏗️ Project Structure

```
elasticsearch-eureka/
├── config/                          # Application configuration
│   ├── index.js                     # Config file
│   └── swagger.js                   # Swagger/OpenAPI configuration
├── docker-compose.yml               # Docker services definition
├── Dockerfile                       # Node.js app container
├── elasticsearch/
│   └── mappings/                    # Index templates
│       ├── products-template.json
│       └── users-template.json
├── logstash/
│   ├── config/
│   │   ├── logstash.yml            # Logstash config
│   │   └── mysql-connector-java.jar # MySQL JDBC driver (download separately)
│   └── pipeline/                    # Logstash pipelines
│       ├── products.conf
│       └── users.conf
├── scripts/                         # Setup and seed scripts
│   ├── setup-indices.js
│   └── seed-products.js
├── src/
│   ├── controllers/                 # API controllers
│   │   └── searchController.js
│   ├── routes/                      # API routes
│   │   └── search.js
│   ├── services/                    # Business logic
│   │   └── searchService.js
│   ├── utils/                       # Utilities
│   │   └── elasticsearch.js
│   └── index.js                     # Application entry point
├── .env.example                     # Environment variables template
└── package.json                     # Node.js dependencies (created via npm init)
```

## 🚀 Quick Start (Recommended)

**⚡ 5-Minute Setup - No npm install needed!**

```powershell
# Run automated setup script
.\setup.ps1
```

This script will setup everything automatically using Docker only!

👉 **For detailed instructions, see [QUICKSTART.md](QUICKSTART.md)**

---

## 📖 Installation Methods

Choose your preferred method:

### Method 1: Quick Setup (Recommended)
**File:** [QUICKSTART.md](QUICKSTART.md)
- ✅ Automated setup script
- ✅ Docker-only (no local npm install)
- ✅ 5 minutes setup
- ✅ Perfect for quick start

### Method 2: Docker-Only Manual Setup
**File:** [INSTALL_DOCKER_ONLY.md](INSTALL_DOCKER_ONLY.md)
- ✅ Step-by-step Docker setup
- ✅ No Node.js installation required
- ✅ All commands explained
- ✅ Troubleshooting included

### Method 3: Traditional Setup (with local npm)
See detailed steps below for traditional installation with npm install on local machine.

---

## 🔧 Traditional Installation (Local npm)

### Prerequisites

-   Docker Desktop installed and running
-   Node.js 18+ (for local development)
-   Git

### Step 1: Clone or Navigate to Project

```powershell
cd C:\Users\ridzfhmi\Documents\Project\SERVICE\elasticsearch-eureka
```

### Step 2: Initialize Node.js Project

Run the following commands to create `package.json` and install dependencies:

```powershell
# Initialize package.json interactively (follow prompts)
npm init

# OR initialize with defaults
npm init -y
```

After `package.json` is created, install the required dependencies:

```powershell
# Install production dependencies
npm install express @elastic/elasticsearch dotenv cors swagger-jsdoc swagger-ui-express

# Install development dependencies
npm install --save-dev nodemon
```

### Step 3: Configure Environment Variables

```powershell
# Copy example environment file
Copy-Item .env.example .env
```

Edit `.env` file if needed (default values work with Docker setup).

### Step 4: Download MySQL JDBC Driver

Download the MySQL Connector/J from [MySQL website](https://dev.mysql.com/downloads/connector/j/) and place it in:

```
logstash/config/mysql-connector-java.jar
```

Or download via PowerShell:

```powershell
# Create directory if not exists
New-Item -ItemType Directory -Force -Path ".\logstash\config"

# Download MySQL Connector (adjust version as needed)
$url = "https://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.2.0/mysql-connector-j-8.2.0.jar"
$output = ".\logstash\config\mysql-connector-java.jar"
Invoke-WebRequest -Uri $url -OutFile $output
```

### Step 5: Configure Logstash Pipelines

Edit the Logstash pipeline files to connect to your external MySQL databases:

**For Products** - `logstash/pipeline/products.conf`:

```conf
jdbc_connection_string => "jdbc:mysql://YOUR_DB_HOST:3306/YOUR_DATABASE?serverTimezone=UTC"
jdbc_user => "YOUR_DB_USER"
jdbc_password => "YOUR_DB_PASSWORD"
```

**For Users** - `logstash/pipeline/users.conf`:

```conf
jdbc_connection_string => "jdbc:mysql://YOUR_DB_HOST_2:3306/YOUR_USER_DATABASE?serverTimezone=UTC"
jdbc_user => "YOUR_DB_USER_2"
jdbc_password => "YOUR_DB_PASSWORD_2"
```

### Step 6: Update package.json Scripts

Add the following scripts to your `package.json`:

```json
{
    "scripts": {
        "start": "node src/index.js",
        "dev": "nodemon src/index.js",
        "setup:indices": "node scripts/setup-indices.js",
        "seed:products": "node scripts/seed-products.js"
    }
}
```

### Step 7: Start Docker Services

```powershell
# Start all services (Elasticsearch, Kibana, Logstash, Node.js app)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Wait for all services to be healthy (especially Elasticsearch). Check status:

```powershell
docker-compose ps
```

### Step 8: Setup Elasticsearch Indices

```powershell
# Create indices with autocomplete mappings
npm run setup:indices
```

### Step 9: Seed Sample Data (Optional)

```powershell
# Add sample product data for testing
npm run seed:products
```

### Step 10: Access Services

-   **API Service**: http://localhost:3002
-   **Swagger API Documentation**: http://localhost:3002/api-docs
-   **Elasticsearch**: http://localhost:9400
-   **Kibana**: http://localhost:5601
-   **Logstash Monitoring**: http://localhost:9600

## 📡 API Endpoints

### 📚 Interactive API Documentation

Access the full interactive Swagger documentation at:

```
http://localhost:3002/api-docs
```

The Swagger UI provides:

-   Complete API endpoint documentation
-   Request/response schemas
-   Interactive testing capability
-   Example requests and responses

### 📮 Postman Collection

Import the ready-to-use Postman collection:

1. Open Postman
2. Click "Import"
3. Select file: `postman_collection.json`
4. Start testing immediately!

The collection includes:

-   All API endpoints with examples
-   Health check requests
-   Product search variations
-   User search variations
-   Direct Elasticsearch queries

### Quick API Reference

### Health Check

```http
GET http://localhost:3002/api/v1/search/health
```

### Product Autocomplete

```http
GET http://localhost:3002/api/v1/search/products/autocomplete?q=apple&size=10
```

### Product Suggestions (Completion)

```http
GET http://localhost:3002/api/v1/search/products/suggest?q=app&size=5
```

### User Autocomplete (Multi-field)

```http
GET http://localhost:3002/api/v1/search/users/autocomplete?q=john&size=10
```

### Advanced Search (Products)

```http
POST http://localhost:3002/api/v1/search/products/advanced
Content-Type: application/json

{
  "query": "apple",
  "filters": {
    "category": "electronics",
    "price": { "gte": 100, "lte": 1000 }
  },
  "size": 10,
  "from": 0,
  "sort": [{ "price": "asc" }]
}
```

### Advanced Search (Users)

```http
POST http://localhost:3002/api/v1/search/users/advanced
Content-Type: application/json

{
  "query": "john doe",
  "filters": {},
  "size": 10,
  "from": 0
}
```

## 🔧 Development

### Run in Development Mode

```powershell
# With hot reload
npm run dev
```

### Run Without Docker (Local Development)

1. Install Elasticsearch and Logstash locally
2. Update `.env` file with local connection details
3. Run `npm run dev`

## 📝 Adding New Indices

### 1. Create Index Template

Create a new file `elasticsearch/mappings/your-index-template.json`:

```json
{
    "index_patterns": ["your-index"],
    "settings": {
        "analysis": {
            "analyzer": {
                "autocomplete": {
                    "tokenizer": "autocomplete_tokenizer",
                    "filter": ["lowercase"]
                },
                "autocomplete_search": {
                    "tokenizer": "lowercase"
                }
            },
            "tokenizer": {
                "autocomplete_tokenizer": {
                    "type": "edge_ngram",
                    "min_gram": 2,
                    "max_gram": 20,
                    "token_chars": ["letter", "digit"]
                }
            }
        }
    },
    "mappings": {
        "properties": {
            "id": { "type": "keyword" },
            "name": {
                "type": "text",
                "analyzer": "autocomplete",
                "search_analyzer": "autocomplete_search"
            },
            "suggest": { "type": "completion" }
        }
    }
}
```

### 2. Create Logstash Pipeline

Create `logstash/pipeline/your-index.conf`:

```conf
input {
  jdbc {
    jdbc_driver_library => "/usr/share/logstash/mysql-connector-java.jar"
    jdbc_driver_class => "com.mysql.cj.jdbc.Driver"
    jdbc_connection_string => "jdbc:mysql://YOUR_HOST:3306/YOUR_DB"
    jdbc_user => "user"
    jdbc_password => "password"
    statement => "SELECT * FROM your_table WHERE updated_at > :sql_last_value"
    schedule => "*/5 * * * *"
  }
}

output {
  elasticsearch {
    hosts => ["http://elasticsearch:9200"]
    index => "your-index"
    document_id => "%{id}"
  }
}
```

### 3. Add to Config

Update `config/index.js`:

```javascript
indices: {
  products: 'products',
  users: 'users',
  yourIndex: 'your-index', // Add this
}
```

### 4. Create API Routes

Add routes and controllers following the existing pattern.

### 5. Setup Index

```powershell
npm run setup:indices
```

## 🐛 Troubleshooting

### Elasticsearch not starting

-   Check Docker resources (increase memory if needed)
-   View logs: `docker-compose logs elasticsearch`

### Logstash connection errors

-   Verify MySQL connection details in pipeline configs
-   Ensure MySQL JDBC driver is in `logstash/config/`
-   Check network connectivity to external databases

### Node.js app can't connect to Elasticsearch

-   Ensure all services are healthy: `docker-compose ps`
-   Wait for Elasticsearch health check to pass (green status)

### Port conflicts

-   Stop services using ports 3000, 5601, 9200, 9300
-   Or modify ports in `docker-compose.yml`

## 📚 Documentation

### Complete Documentation Files

-   **[README.md](README.md)** - Main project documentation (this file)
-   **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - Complete API reference with examples
-   **[SWAGGER_GUIDE.md](SWAGGER_GUIDE.md)** - Swagger/OpenAPI documentation guide
-   **[postman_collection.json](postman_collection.json)** - Ready-to-import Postman collection

### External Resources

-   [Elasticsearch Documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
-   [Logstash JDBC Input Plugin](https://www.elastic.co/guide/en/logstash/current/plugins-inputs-jdbc.html)
-   [Elasticsearch Node.js Client](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)
-   [Swagger/OpenAPI Specification](https://swagger.io/specification/)

## 📄 License

MIT

## 👤 Author

Your Name

---

**Happy Searching! 🔍**
