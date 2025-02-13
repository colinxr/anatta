import dotenv from "dotenv"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import ShopifyClient from "./shopifyClient.js"
import ProductService from "./productService.js"

// Load environment variables
dotenv.config()

// Use environment variables instead of hardcoded values
const SHOP_DOMAIN = process.env.SHOP_DOMAIN
const ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN

if (!SHOP_DOMAIN || !ACCESS_TOKEN) {
  console.error(
    "Missing required environment variables. Please check your .env file"
  )
  process.exit(1)
}

// Initialize services
const shopifyClient = new ShopifyClient(SHOP_DOMAIN, ACCESS_TOKEN)
const productService = new ProductService(shopifyClient)

// Parse command line arguments
const argv = yargs(hideBin(process.argv))
  .option("name", {
    alias: "n",
    description: "Product name to search for",
    type: "string",
    demandOption: true,
  })
  .help().argv

// Execute the search
async function main() {
  try {
    const products = await productService.searchProducts(argv.name)
    products.forEach(line => console.log(line))
  } catch (error) {
    console.error("Error:", error.message)
    process.exit(1)
  }
}

main()
