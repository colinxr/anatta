import { SEARCH_PRODUCTS_QUERY } from "./queries.js"

class ProductService {
  constructor(shopifyClient) {
    this.shopifyClient = shopifyClient
  }

  async queryProducts(searchTerm) {
    return this.shopifyClient.query(SEARCH_PRODUCTS_QUERY, {
      query: `${searchTerm}`,
    })
  }

  extractVariants(products) {
    return products.edges.flatMap(({ node: product }) =>
      product.variants.edges.map(({ node: variant }) => ({
        productTitle: product.title,
        variantTitle: variant.title,
        price: parseFloat(variant.price),
      }))
    )
  }

  sortVariantsByPrice(variants, ascending = false) {
    return [...variants].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    )
  }

  formatVariant(variant) {
    return `${variant.productTitle} - ${
      variant.variantTitle
    } - $${variant.price.toFixed(2)}`
  }

  async searchProducts(searchTerm) {
    const data = await this.queryProducts(searchTerm)
    const variants = this.extractVariants(data.products)
    const sortedVariants = this.sortVariantsByPrice(variants, true)
    return sortedVariants.map(variant => this.formatVariant(variant))
  }
}

export default ProductService
