import { createClient } from "@supabase/supabase-js";
import { UserRepository } from "@/domain/repositories/users/UserRepository";
import { User } from "@/domain/entities/auth/User";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export class SbUserRepository implements UserRepository {
  async getUsers(): Promise<User[]> {
    const { data, error } = await supabase.from("user").select("*");
    if (error) throw new Error("유저 조회 실패");
    return data;
  }

  async findUserByUserId(id: number): Promise<User> {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error("유저를 찾을 수 없음");
    return data;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email)
      .single();

    if (error) return null;
    return data;
  }

  // id, nickname, level, role, email, created_at, updated_at, photo_url, public_status
  async createUser(
    nickname: string,
    email: string,
    provider: string
  ): Promise<User> {
    const { data, error } = await supabase
      .from("user")
      .insert({ nickname, email, provider })
      .single();

    if (error) throw new Error("유저 생성 실패");
    return data;
  }

  // 상황 고려하여 accessToken을 DB에 넣을지말지 결정하고 지울 것
  // async updateUserAccessToken(id: number, accessToken: string): Promise<void> {
  //   const { error } = await supabase
  //     .from("user")
  //     .update({ accessToken })
  //     .eq("id", id);

  //   if (error) throw new Error("액세스 토큰 업데이트 실패");
  // }

  async checkUserExists(email: string): Promise<boolean> {
    const user = await this.findUserByEmail(email);
    return user !== null;
  }

  async deleteUser(id: number): Promise<void> {
    const { error } = await supabase.from("user").delete().eq("id", id);
    if (error) throw new Error("유저 삭제 실패");
  }
}
