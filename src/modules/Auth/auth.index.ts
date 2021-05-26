import { IResolvers } from "graphql-tools";
import { GQLArgs, GQLContext } from "../../types";
import authService from "../../utils/isAuth";
import { controllers } from "./auth.controller";

export const resolvers: IResolvers = {
  Query: {},
  Mutation: {
    login: async (
      parent: any,
      args: GQLArgs,
      context: GQLContext,
      info: any,
    ) => {
      return authService.isAuth({
        resolve: controllers.login,
        args,
        context,
        children: [],
      });
    },
  },
};
