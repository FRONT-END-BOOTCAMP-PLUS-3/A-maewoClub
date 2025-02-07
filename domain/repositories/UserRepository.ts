import { User } from "@supabase/supabase-js";

export interface UserRepository {
  // 모든 유저를 호출
  getUsers(): Promise<User[]>;

  // 특정 유저를 찾기
  findUserByUserId(id: string): Promise<User>;

  // 로그인 프로세스
  findUserByEmail(email: string): Promise<User | null>;
  // comparePassword(email: string): Promise<void>;

  // 특정 유저 생성 및 삭제
  createUser(nickname: string, email: string, provider: string): Promise<User>;
  deleteUser(id: string): Promise<void>;

  // 로그인할 때 최신 토큰 저장
  // updateUserAccessToken(id: string, accessToken: string): Promise<void>;
}
