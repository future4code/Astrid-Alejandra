import { User } from "../../src/model/User";
import { adminUserMock, normalUserMock } from "./userMocks";

export class UserDatabase {
  public async createUser(user: User): Promise<void> {}

  public async getUserByEmail(email: string): Promise<User | undefined> {
    if (email === normalUserMock.getEmail()) return normalUserMock;
    if (email === adminUserMock.getEmail()) return adminUserMock;
  }

  public async getUserById(id: string): Promise<User | undefined> {
    if (id === normalUserMock.getId() ? normalUserMock : undefined)
      return normalUserMock;
    if (id === adminUserMock.getId() ? normalUserMock : undefined)
      return adminUserMock;
  }

  public async getAllUsers(): Promise<User[]> {
    return [normalUserMock, adminUserMock];
  }
}

export default new UserDatabase();
