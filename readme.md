# Shopify Product Search CLI

A command-line tool that searches Shopify products and displays their variants sorted by price.

## Features

- Search products using Shopify's Admin GraphQL API
- Display product variants sorted by price (lowest to highest)
- Secure credential management using environment variables
- Clean separation of concerns (API client, services, queries)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your Shopify credentials:

```bash
SHOP_DOMAIN=your_shop_domain.myshopify.com
SHOPIFY_ACCESS_TOKEN=your_access_token
```


## Usage

```bash
node app.js -n "product name"
````

Example output:
Product A - Small - $10.00  
Product B - Medium - $15.00  
Product A - Large - $20.00  

## Project Structure

- `app.js` - Main application entry point
- `shopifyClient.js` - Handles Shopify API communication
- `productService.js` - Business logic for product operations
- `queries.js` - GraphQL query definitions
- `.env` - Environment variables (not tracked in git)

## Dependencies

- node-fetch: For making HTTP requests
- dotenv: For environment variable management
- yargs: For command-line argument parsing
