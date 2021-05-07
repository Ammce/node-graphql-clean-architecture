// Todo Implement Real database

class UserGateway {
  constructor() {}
  async getUserById(id: string | number) {
    // Todo Map the data before returning
    return {
      name: 'Amel',
      age: 26,
    };
  }
  async addUser(data: any) {
    // Todo Map the data before returning and add data type
    return {
      name: 'Added User Amel',
      age: 26,
    };
  }
}

export default UserGateway;
