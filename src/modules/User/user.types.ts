import gql from "graphql-tag";

export const applicantTypes = gql`
  type User {
    id: ID!
    name: String
    age: Int
    products: [Product]
  }

  type Query {
    Users: [User]
    User(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int!): User
  }
`;
