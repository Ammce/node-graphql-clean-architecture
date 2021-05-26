import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import { UserGateway } from "../../../db/gateways";
import { User } from "../../../db/User/user.types";

class Login {
  userGateway: UserGateway;
  input: any;
  constructor({
    userGateway,
    input,
  }: {
    userGateway: UserGateway;
    input: any;
  }) {
    this.userGateway = userGateway;
    this.input = input;
  }

  // Todo add return types of unique User type
  async login(): Promise<User> {
    const { password, email } = this.input;
    const user = await this.validateEmail(email);
    this.validatePassword(password, user.password);
    return user;
  }

  private async validateEmail(email: string): Promise<User> {
    const user = await this.userGateway.getUserByEmail(email);
    if (!user) {
      throw new GraphQLError("User doesn't exist.");
    }
    return user;
  }

  private validatePassword(
    loginPassword: string,
    userPassword: string,
  ): boolean {
    const correctPassword = bcrypt.compareSync(loginPassword, userPassword);
    if (!correctPassword) {
      throw new GraphQLError("Wrong credentials.");
    }
    return true;
  }
}

export default Login;
