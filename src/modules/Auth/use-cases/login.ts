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
  async login(): Promise<string> {
    const { password, email } = this.input;
    throw new GraphQLError("User not found izbrfisi semeemee");
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userGateway.getUserById("1234");
    return "";
  }
}

export default Login;
