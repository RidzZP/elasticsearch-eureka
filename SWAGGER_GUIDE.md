# Swagger/OpenAPI Documentation Guide

## 🎯 Overview

This project includes comprehensive Swagger/OpenAPI documentation for all API endpoints. The documentation provides an interactive interface to test and explore the API.

## 📍 Access Points

### Swagger UI (Interactive Documentation)

```
http://localhost:3002/api-docs
```

This provides:

-   ✅ Complete list of all endpoints
-   ✅ Request/response schemas
-   ✅ Interactive "Try it out" functionality
-   ✅ Example requests and responses
-   ✅ Parameter descriptions
-   ✅ Error response examples

## 🎨 Features

### 1. Interactive Testing

-   Click on any endpoint
-   Click "Try it out"
-   Enter parameters
-   Click "Execute"
-   View the response in real-time

### 2. Request Examples

Each endpoint includes:

-   Sample request bodies
-   Query parameter examples
-   Expected responses
-   Error scenarios

### 3. Schema Definitions

All data models are documented:

-   **Product**: Product object structure
-   **User**: User object structure
-   **AdvancedSearchRequest**: Advanced search parameters
-   **SuccessResponse**: Standard success response format
-   **ErrorResponse**: Standard error response format

## 📖 Available Endpoints in Swagger

### Health Check

-   **GET** `/api/v1/search/health`
-   Check API and Elasticsearch connectivity

### Products

-   **GET** `/api/v1/search/products/autocomplete`
    -   Autocomplete search with edge_ngram
-   **GET** `/api/v1/search/products/suggest`
    -   Fast completion suggester
-   **POST** `/api/v1/search/products/advanced`
    -   Advanced search with filters and sorting

### Users

-   **GET** `/api/v1/search/users/autocomplete`
    -   Multi-field autocomplete search
-   **POST** `/api/v1/search/users/advanced`
    -   Advanced user search

## 🔧 Customization

### Modifying Swagger Configuration

Edit `config/swagger.js` to customize:

```javascript
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Your API Title",
            version: "1.0.0",
            description: "Your Description",
            // Add more info
        },
        servers: [
            {
                url: "http://localhost:3002",
                description: "Development server",
            },
            // Add more servers (staging, production)
        ],
    },
};
```

### Adding Documentation to New Endpoints

When creating new routes, add JSDoc comments:

```javascript
/**
 * @swagger
 * /api/v1/your/endpoint:
 *   get:
 *     summary: Brief description
 *     description: Detailed description
 *     tags: [YourTag]
 *     parameters:
 *       - in: query
 *         name: paramName
 *         required: true
 *         schema:
 *           type: string
 *         description: Parameter description
 *     responses:
 *       200:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/YourSchema'
 */
router.get("/your/endpoint", yourController.yourMethod);
```

### Adding New Schemas

Edit `config/swagger.js` and add to `components.schemas`:

```javascript
components: {
  schemas: {
    YourNewSchema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '123',
        },
        name: {
          type: 'string',
          example: 'Example Name',
        },
      },
    },
  },
}
```

## 🎯 Best Practices

### 1. Keep Documentation Updated

-   Update Swagger comments when changing endpoints
-   Add examples for all request/response formats
-   Document all parameters and their types

### 2. Use Meaningful Tags

-   Group related endpoints with tags
-   Use consistent tag names
-   Tags help organize the documentation

### 3. Provide Examples

-   Include realistic examples in schemas
-   Show common use cases
-   Document edge cases

### 4. Document Errors

-   Include all possible error responses
-   Show error message formats
-   Explain when errors occur

## 📱 Testing with Swagger UI

### Step 1: Open Swagger UI

Navigate to `http://localhost:3002/api-docs`

### Step 2: Select an Endpoint

Click on any endpoint to expand it

### Step 3: Try It Out

1. Click "Try it out" button
2. Enter required parameters
3. Modify request body if needed
4. Click "Execute"

### Step 4: View Response

-   See the actual response from your API
-   Check response status code
-   View response headers
-   Copy the cURL command

## 🔒 Adding Authentication to Swagger

If you add authentication to your API, update Swagger configuration:

```javascript
components: {
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
    apiKey: {
      type: 'apiKey',
      in: 'header',
      name: 'X-API-Key',
    },
  },
}

// Then in your endpoints:
/**
 * @swagger
 * /api/v1/protected/endpoint:
 *   get:
 *     security:
 *       - bearerAuth: []
 */
```

## 🎨 Customizing Swagger UI

### Custom CSS

Modify the Swagger UI setup in `src/index.js`:

```javascript
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        customCss: `
        .swagger-ui .topbar { display: none }
        .swagger-ui .info .title { color: #3b82f6; }
    `,
        customSiteTitle: "Your Custom Title",
        customfavIcon: "/path/to/favicon.ico",
    })
);
```

### Custom Logo

```javascript
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        customSiteTitle: "Your API Docs",
        customfavIcon: "/favicon.ico",
        swaggerOptions: {
            persistAuthorization: true,
        },
    })
);
```

## 📤 Exporting Swagger Documentation

### Export as JSON

The OpenAPI specification can be accessed programmatically:

```javascript
// Add this route to your Express app
app.get("/api-docs.json", (req, res) => {
    res.json(specs);
});
```

Then access: `http://localhost:3002/api-docs.json`

### Import to Other Tools

The exported JSON can be imported to:

-   **Postman**: Import → Link → Enter URL
-   **Insomnia**: Import → From URL
-   **VS Code REST Client**: Use OpenAPI extension
-   **API Testing Tools**: Most tools support OpenAPI 3.0

## 🔍 Troubleshooting

### Swagger UI Not Loading

1. Check if swagger packages are installed:
    ```bash
    npm list swagger-jsdoc swagger-ui-express
    ```
2. Verify the route is registered before other routes
3. Check browser console for errors

### Documentation Not Updating

1. Restart the Node.js server
2. Clear browser cache
3. Verify JSDoc comments syntax
4. Check the `apis` path in `config/swagger.js`

### Schemas Not Appearing

1. Verify schema is defined in `components.schemas`
2. Check `$ref` paths are correct
3. Ensure proper YAML/JSON formatting in JSDoc

## 📚 Additional Resources

-   [Swagger Official Documentation](https://swagger.io/docs/)
-   [OpenAPI Specification](https://spec.openapis.org/oas/v3.0.0)
-   [swagger-jsdoc Documentation](https://github.com/Surnet/swagger-jsdoc)
-   [swagger-ui-express Documentation](https://github.com/scottie1984/swagger-ui-express)

## 🎓 Learning Resources

### Basic Tutorial

1. Read about OpenAPI 3.0 specification
2. Learn JSDoc syntax for API documentation
3. Practice writing documentation for your endpoints
4. Test documentation with Swagger UI

### Advanced Topics

-   Security schemes (JWT, OAuth2, API Keys)
-   Response examples and schemas
-   Multiple server configurations
-   Custom validators

---

**Pro Tip**: Keep your Swagger documentation as up-to-date as your code. Good documentation is as important as good code!
