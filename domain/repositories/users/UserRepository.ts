import { User } from "@/domain/entities/auth/User";

export interface UserRepository {
  getUsers(): Promise<User[]>;

  findUserByUserId(id: number): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;

  createUser(nickname: string, email: string, provider: string): Promise<User>;
  deleteUser(id: number): Promise<void>;

  // 로그인할 때 최신 토큰 저장
  // updateUserAccessToken(id: number, accessToken: string): Promise<void>;
  checkUserExists(email: string): Promise<boolean>;
}
