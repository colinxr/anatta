import dotenv from "dotenv"

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
