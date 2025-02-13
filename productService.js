import { SEARCH_PRODUCTS_QUERY } from "./queries.js"

class ProductService {
  constructor(shopifyClient) {
    this.shopifyClient = shopifyClient
  }

  async searchProducts(searchTerm) {
    const data = await this.shopifyClient.query(SEARCH_PRODUCTS_QUERY, {
      query: searchTerm,
    })
    return data.products
  }
}

export default ProductService
