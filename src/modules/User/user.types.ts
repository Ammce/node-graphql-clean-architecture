import gql from "graphql-tag";

export const userTypes = gql`
  directive @auth(permissions: [String]) on FIELD_DEFINITION | OBJECT

  # type User {
  #   id: ID!
  #   name: String @deprecated(reason: "Use \`newField\`.")
  #   age: Int
  #     @deprecated(reason: "Use \`newField\`.")
  #     @auth(permissions: ["amel"])
  #   products: [Product]
  #   permissions: [String]!
  # }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String!
    password: String!
    products: [Product]
  }

  type Query {
    users: [User] @auth(permissions: ["user:can_get_list"])
    user(id: ID!): User
  }

  type Mutation {
    addUser(input: addUserInput): User
  }

  input addUserInput {
    email: String!
    password: String!
  }
`;
