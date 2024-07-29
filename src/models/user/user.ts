export interface UserModel {
  id: string,
  name: string,
}

export default class UserRepository {
  static repo = new UserRepository();

  async getUsers(): Promise<UserModel[]> {
    return [
      { id: '1', name: 'Vitor' } as UserModel,
      { id: '2', name: 'Tester' } as UserModel,
    ];
  }
}
