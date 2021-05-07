import { UserGateway } from '../../../db/gateways';
import { User } from '../../../db/User/user.types';

class GetUser {
  userGateway: UserGateway;
  userId: string | number;
  constructor({
    userGateway,
    userId,
  }: {
    userGateway: UserGateway;
    userId: string | number;
  }) {
    this.userGateway = userGateway;
    this.userId = userId;
  }

  // Todo add return types of unique User type
  async getUserById(): Promise<User> {
    return await this.userGateway.getUserById(this.userId);
  }
}

export default GetUser;
