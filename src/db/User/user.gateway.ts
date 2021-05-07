// Todo Implement Real database

import { userMock } from './user.mock';
import { User } from './user.types';

// export interface IUserGateway {
//   getUser
// }

class UserGateway {
  constructor() {}
  async getUserById(id: string | number): Promise<User> {
    // Todo Map the data before returning
    return userMock;
  }

  async getAllUsers(): Promise<User[]> {
    // Todo Map the data before returning
    return [userMock];
  }

  async addUser(data: any): Promise<User> {
    // Todo Map the data before returning and add data type
    return userMock;
  }

  async updateUser(id: string, data: any): Promise<User> {
    // Todo Map the data before returning and add data type
    return userMock;
  }

  async deleteUser(id: string): Promise<boolean> {
    // Todo Map the data before returning and add data type
    return true;
  }
}

export default UserGateway;
