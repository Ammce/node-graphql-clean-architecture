import { User } from '../../db/User/user.types';
import { GQLArgs, GQLContext } from '../../types';
import { GetUser, AddUser } from './use-cases';

export const controllers = {
  user: async (args: GQLArgs, context: GQLContext): Promise<User> => {
    // Todo here the userId will come from the authenticated user which will be added to context after authentication
    const getUser = new GetUser({
      userGateway: context.db.user,
      userId: 123,
    });
    return await getUser.getUserById();
  },
  addUser: async (args: GQLArgs, context: GQLContext): Promise<User> => {
    // Todo here the userId will come from the authenticated user which will be added to context after authentication
    const userToAdd = new AddUser({
      userGateway: context.db.user,
      input: args.input,
    });
    return await userToAdd.addUser();
  },
};
