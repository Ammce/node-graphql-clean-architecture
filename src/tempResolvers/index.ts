import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    // me: (parent, args, context, info) => {
    //   console.log("Hitting", args);
    //   return {
    //     email: "Amel",
    //   };
    // },
  },
  Mutation: {
    // register: async (parent, args, context, info) => {
    //   console.log(context.db);
    //   console.log(info);
    //   return true;
    // },
  },
};
