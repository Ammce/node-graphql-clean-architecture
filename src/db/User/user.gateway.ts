// Todo Implement Real database

import { userMock } from "./user.mock";
import { User } from "./user.types";

export interface IUserGateway {
  getUserById(id: string | number): Promise<User>;
  getUserByEmail(id: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  updateUser(id: string, data: any): Promise<User>;
  deleteUser(id: string): Promise<boolean>;
}

class UserGateway implements IUserGateway {
  constructor() {}
  async getUserById(id: string | number): Promise<User> {
    // Todo Map the data before returning
    return userMock;
  }

  async getUserByEmail(email: string): Promise<User> {
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
