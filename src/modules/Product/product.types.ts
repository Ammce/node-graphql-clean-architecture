import gql from "graphql-tag";

export const productTypes = gql`
  type Product {
    id: ID!
    description: String
    price: Int
    user: User
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;
