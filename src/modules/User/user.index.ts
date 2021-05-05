import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    users: (parent, args, context, info) => {
      console.log("Hitting", args);
      return [
        {
          name: "Amel",
          age: 25,
        },
      ];
    },
    user: (parent, args, context, info) => {
      console.log("Hitting", args);
      return {
        name: "Amel",
        age: 26,
      };
    },
  },
  Mutation: {
    addUser: async (parent, args, context, info) => {
      console.log(context.db);
      console.log(info);
      return {
        name: "Amel",
        age: 26,
      };
    },
  },
};
