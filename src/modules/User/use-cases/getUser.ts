import { UserGateway } from "../../../db/gateways";

class GetUser {
  userGateway: UserGateway;
  userId: string | number;
  constructor(userGateway: UserGateway, userId: string | number) {
    this.userGateway = userGateway;
    this.userId = userId;
  }

  // Todo add return types of unique User type
  async getUserById() {
    return await this.userGateway.getUserById(this.userId);
  }
}

export default GetUser;
