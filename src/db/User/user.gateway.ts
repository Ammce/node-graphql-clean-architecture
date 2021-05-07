// Todo Implement Real database

// export interface IUserGateway {
//   getUser
// }

class UserGateway {
  constructor() {}
  async getUserById(id: string | number) {
    // Todo Map the data before returning
    return {
      name: 'Amel',
      age: 26,
    };
  }

  async getAllUsers() {
    // Todo Map the data before returning
    return [
      {
        name: 'Amel',
        age: 26,
      },
    ];
  }

  async addUser(data: any) {
    // Todo Map the data before returning and add data type
    return {
      name: 'Added User Amel',
      age: 26,
    };
  }

  async updateUser(id: string, data: any) {
    // Todo Map the data before returning and add data type
    return {
      name: 'Added User Amel',
      age: 26,
    };
  }

  async deleteUser(id: string) {
    // Todo Map the data before returning and add data type
    return {
      success: true,
    };
  }
}

export default UserGateway;
