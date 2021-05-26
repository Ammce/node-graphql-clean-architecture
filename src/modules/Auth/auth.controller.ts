import { User } from "../../db/User/user.types";
import { GQLArgs, GQLContext } from "../../types";
import { Login } from "./use-cases";

export const controllers = {
  login: async (args: GQLArgs, context: GQLContext): Promise<User> => {
    const loginUC = new Login({
      userGateway: context.db.user,
      input: args.input,
    });
    return await loginUC.login();
  },
};
