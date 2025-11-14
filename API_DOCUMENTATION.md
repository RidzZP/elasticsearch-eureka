# API Documentation

## Base URL

```
http://localhost:3000/api/v1
```

## Swagger Documentation

Interactive API documentation is available at:

```
http://localhost:3000/api-docs
```

---

## Endpoints

### 1. Health Check

**GET** `/api/v1/search/health`

Check the health status of the API and Elasticsearch connection.

**Response:**

```json
{
    "success": true,
    "elasticsearch": "connected",
    "timestamp": "2025-11-12T10:30:00.000Z"
}
```

---

### 2. Product Autocomplete

**GET** `/api/v1/search/products/autocomplete`

Search products with autocomplete functionality using edge_ngram tokenizer.

**Query Parameters:**

-   `q` (required): Search query string
-   `size` (optional): Number of results to return (default: 10)

**Example Request:**

```bash
curl "http://localhost:3000/api/v1/search/products/autocomplete?q=apple&size=5"
```

**Response:**

```json
{
    "success": true,
    "total": 3,
    "results": [
        {
            "id": "1",
            "name": "Apple iPhone 15 Pro",
            "description": "Latest flagship smartphone with advanced features",
            "category": "electronics",
            "price": 999.99,
            "suggest": "Apple iPhone 15 Pro",
            "created_at": "2025-11-12T00:00:00.000Z",
            "updated_at": "2025-11-12T00:00:00.000Z",
            "score": 1.5
        }
    ]
}
```

---

### 3. Product Suggestions (Completion)

**GET** `/api/v1/search/products/suggest`

Fast product suggestions using Elasticsearch completion suggester.

**Query Parameters:**

-   `q` (required): Search query prefix
-   `size` (optional): Number of suggestions to return (default: 5)

**Example Request:**

```bash
curl "http://localhost:3000/api/v1/search/products/suggest?q=app&size=5"
```

**Response:**

```json
{
    "success": true,
    "total": 3,
    "results": [
        {
            "text": "Apple iPhone 15 Pro",
            "score": 1.0,
            "id": "1",
            "name": "Apple iPhone 15 Pro",
            "category": "electronics",
            "price": 999.99
        }
    ]
}
```

---

### 4. Advanced Product Search

**POST** `/api/v1/search/products/advanced`

Search products with advanced filters, sorting, and pagination.

**Request Body:**

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
    "sort": [{ "price": "asc" }]
}
```

**Example Request:**

```bash
curl -X POST "http://localhost:3000/api/v1/search/products/advanced" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "smartphone",
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
      { "price": "asc" }
    ]
  }'
```

**Response:**

```json
{
    "success": true,
    "total": 2,
    "results": [
        {
            "id": "1",
            "name": "Apple iPhone 15 Pro",
            "description": "Latest flagship smartphone with advanced features",
            "category": "electronics",
            "price": 999.99,
            "score": 2.1
        }
    ]
}
```

**Filter Options:**

-   **Exact match**: `"category": "electronics"`
-   **Multiple values**: `"category": ["electronics", "audio"]`
-   **Range**: `"price": { "gte": 100, "lte": 1000 }`
-   **Date range**: `"created_at": { "gte": "2025-01-01" }`

**Sort Options:**

-   Ascending: `{ "price": "asc" }`
-   Descending: `{ "price": "desc" }`
-   By score: `{ "_score": "desc" }`

---

### 5. User Autocomplete

**GET** `/api/v1/search/users/autocomplete`

Search users with multi-field autocomplete (username, full name, email).

**Query Parameters:**

-   `q` (required): Search query string
-   `size` (optional): Number of results to return (default: 10)

**Example Request:**

```bash
curl "http://localhost:3000/api/v1/search/users/autocomplete?q=john&size=10"
```

**Response:**

```json
{
    "success": true,
    "total": 2,
    "results": [
        {
            "id": "1",
            "username": "johndoe",
            "email": "john.doe@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "full_name": "John Doe",
            "suggest": "johndoe",
            "created_at": "2025-11-12T00:00:00.000Z",
            "updated_at": "2025-11-12T00:00:00.000Z",
            "score": 1.8
        }
    ]
}
```

---

### 6. Advanced User Search

**POST** `/api/v1/search/users/advanced`

Search users with advanced filters, sorting, and pagination.

**Request Body:**

```json
{
    "query": "john doe",
    "filters": {},
    "size": 10,
    "from": 0,
    "sort": [{ "username": "asc" }]
}
```

**Example Request:**

```bash
curl -X POST "http://localhost:3000/api/v1/search/users/advanced" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "john",
    "size": 10,
    "from": 0
  }'
```

**Response:**

```json
{
    "success": true,
    "total": 1,
    "results": [
        {
            "id": "1",
            "username": "johndoe",
            "email": "john.doe@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "full_name": "John Doe",
            "score": 2.5
        }
    ]
}
```

---

## Error Responses

All endpoints return error responses in the following format:

**400 Bad Request:**

```json
{
    "success": false,
    "message": "Query parameter 'q' is required"
}
```

**500 Internal Server Error:**

```json
{
    "success": false,
    "message": "Internal server error",
    "error": "Detailed error message (only in development mode)"
}
```

---

## Testing with cURL

### Basic Autocomplete

```bash
curl "http://localhost:3000/api/v1/search/products/autocomplete?q=apple"
```

### Suggestion Search

```bash
curl "http://localhost:3000/api/v1/search/products/suggest?q=app"
```

### Advanced Search

```bash
curl -X POST "http://localhost:3000/api/v1/search/products/advanced" \
  -H "Content-Type: application/json" \
  -d '{"query": "apple", "size": 5}'
```

### Health Check

```bash
curl "http://localhost:3000/api/v1/search/health"
```

---

## Testing with PowerShell

### Basic Autocomplete

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/v1/search/products/autocomplete?q=apple" -Method Get
```

### Advanced Search

```powershell
$body = @{
    query = "apple"
    size = 10
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/v1/search/products/advanced" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

---

## Postman Collection

You can import the Swagger/OpenAPI specification into Postman:

1. Open Postman
2. Click "Import"
3. Enter URL: `http://localhost:3000/api-docs-json`
4. Click "Import"

This will create a complete collection of all API endpoints with examples.

---

## Rate Limiting

Currently, there is no rate limiting implemented. For production use, consider adding rate limiting middleware.

## Authentication

Currently, the API is open. For production use, consider adding authentication (JWT, API Keys, etc.).

---

## Additional Resources

-   **Swagger UI**: http://localhost:3000/api-docs
-   **OpenAPI JSON**: http://localhost:3000/api-docs-json (if configured)
-   **Elasticsearch**: http://localhost:9200
-   **Kibana**: http://localhost:5601
