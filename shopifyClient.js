import fetch from "node-fetch"

class ShopifyClient {
  constructor(domain, accessToken) {
    this.domain = domain
    this.accessToken = accessToken
    this.endpoint = `https://${domain}/admin/api/2024-01/graphql.json`
  }
}

export default ShopifyClient
