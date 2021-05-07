import gql from 'graphql-tag';

export const userTypes = `
  type User {
    id: ID!
    name: String
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
