export const SEARCH_PRODUCTS_QUERY = `
  query searchProducts($query: String!) {
    products(first: 10, query: $query) {
      edges {
        node {
          title
          variants(first: 10) {
            edges {
              node {
                title
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`
