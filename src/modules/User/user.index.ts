import { IResolvers } from "graphql-tools";
import authService from "../../utils/isAuth";
import { controllers } from "./user.controller";

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
      return authService.isAuth({
        resolve: controllers.user,
        args,
        context,
        children: [],
      });
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
