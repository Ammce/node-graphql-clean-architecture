import { IResolvers } from "graphql-tools";
import { Request } from "express";

export const resolvers: IResolvers = {
  Query: {
    me: (_, __, { req }: { req: Request }) => {
      return {
        name: "Amel",
      };
    },
  },
  Mutation: {
    register: async (
      _,
      { email, password }: { email: string; password: string }
    ) => {
      console.log(email, password);

      return true;
    },
  },
};
