import fetch from "node-fetch"

class ShopifyClient {
  constructor(domain, accessToken) {
    this.domain = domain
    this.accessToken = accessToken
    this.endpoint = `https://${domain}/admin/api/2024-01/graphql.json`
  }

  async query(queryStr, variables = {}) {
    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": this.accessToken,
        },
        body: JSON.stringify({
          query: queryStr,
          variables,
        }),
      })

      const data = await response.json()

      if (data.errors) {
        throw new Error(
          `GraphQL Errors: ${JSON.stringify(data.errors, null, 2)}`
        )
      }

      return data.data
    } catch (error) {
      throw new Error(`Failed to query Shopify API: ${error.message}`)
    }
  }
}

export default ShopifyClient
