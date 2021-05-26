import { resolvers as userResolvers } from "../../modules/User/user.index";
import { resolvers as authResolvers } from "../../modules/Auth/auth.index";

export default {
  ...userResolvers,
  ...authResolvers,
};
