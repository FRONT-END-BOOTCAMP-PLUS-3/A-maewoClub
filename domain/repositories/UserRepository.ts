import { UserDto } from "@/application/users/dto/UserDto";
import { User } from "../entities/User";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  findUserByUserId(id: string): Promise<User>;

  getUserByEmail(email: string): Promise<UserDto | null>;
  checkPassword(email: string, password: string): Promise<boolean>;

  createUser(nickname: string, email: string, provider: string): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
