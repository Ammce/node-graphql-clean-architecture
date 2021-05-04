import { IResolvers, mergeSchemas } from "graphql-tools";
import { Request } from "express";

export const resolvers: IResolvers = {
  Query: {
    me: (parent, args, context, info) => {
      console.log("Hitting", args);
      return {
        email: "Amel",
      };
    },
  },
  Mutation: {
    register: async (parent, args, context, info) => {
      console.log(context.db);
      console.log(info);
      return true;
    },
  },
};
