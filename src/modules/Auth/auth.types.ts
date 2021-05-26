import gql from "graphql-tag";

export const authTypes = gql`
  type Mutation {
    login(input: loginInput): User
  }

  input loginInput {
    email: String!
    password: String!
  }
`;
