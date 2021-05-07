import { UserGateway } from '../../../db/gateways';

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
  async addUser() {
    return await this.userGateway.addUser(this.input);
  }
}

export default AddUser;
