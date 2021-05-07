import { UserGateway } from '../../../db/gateways';
import { User } from '../../../db/User/user.types';

class AddUser {
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
  async addUser(): Promise<User> {
    return await this.userGateway.addUser(this.input);
  }
}

export default AddUser;
