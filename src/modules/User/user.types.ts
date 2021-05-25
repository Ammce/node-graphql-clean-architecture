import gql from "graphql-tag";

export const userTypes = gql`
  type User {
    id: ID!
    name: String @deprecated(reason: "Use \`newField\`.")
    age: Int
    products: [Product]
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(input: addUserInput): User
  }

  input addUserInput {
    name: String!
    age: Int!
  }
`;
