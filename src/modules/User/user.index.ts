import { IResolvers } from 'graphql-tools';
import { GQLArgs, GQLContext } from '../../types';
import authService from '../../utils/isAuth';
import { controllers } from './user.controller';

export const resolvers: IResolvers = {
  Query: {
    users: (parent: any, args: GQLArgs, context: GQLContext, info: any) => {
      return [
        {
          name: 'Amel',
          age: 25,
        },
      ];
    },
    user: (parent: any, args: GQLArgs, context: GQLContext, info: any) => {
      return authService.isAuth({
        resolve: controllers.user,
        args,
        context,
        children: [],
      });
    },
  },
  Mutation: {
    addUser: async (
      parent: any,
      args: GQLArgs,
      context: GQLContext,
      info: any,
    ) => {
      return authService.isAuth({
        resolve: controllers.addUser,
        args,
        context,
        children: [],
      });
    },
  },
};
