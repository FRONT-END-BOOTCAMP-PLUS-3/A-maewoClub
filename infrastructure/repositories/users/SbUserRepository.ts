import bcrypt from "bcryptjs";
import { createClient } from "@supabase/supabase-js";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { User } from "@/domain/entities/User";
import { UserDto } from "@/application/users/dto/UserDto";

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

  async findUserByUserId(id: string): Promise<User> {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error("유저를 찾을 수 없음");
    return data;
  }

  async checkPassword(email: string, password: string): Promise<boolean> {
    const { data, error } = await supabase
      .from("user")
      .select("password")
      .eq("email", email)
      .maybeSingle();

    if (error || !data || !data.password) {
      console.error("❌ 비밀번호 조회 실패 또는 저장된 비밀번호 없음:", error);
      return false;
    }

    const isMatch = password == data.password;

    return isMatch;
  }

  async getUserByEmail(email: string): Promise<UserDto | null> {
    if (!email) {
      console.error("❌ 유효하지 않은 이메일 값:", email);
      return null;
    }

    const { data, error } = await supabase
      .from("user")
      .select("id, email, nickname, level, role, photo_url, created_at")
      .eq("email", email)
      .maybeSingle();

    if (error) {
      return null;
    }

    if (!data) {
      return null;
    }

    const userDto: UserDto = {
      id: data.id,
      nickname: data.nickname,
      level: data.level,
      role: data.role,
      email: data.email,
      photoUrl: data.photo_url,
      createdAt: new Date(data.created_at),
    };

    return userDto;
  }

  async createUser(
    nickname: string,
    email: string,
    provider: string
  ): Promise<User> {
    const { data, error } = await supabase
      .from("user")
      .insert({ nickname, email, provider })
      .select()
      .single();
    if (error) {
      console.error("❌ 유저 생성 중 오류 발생:", {
        message: error.message,
        code: error.code,
      });
      throw new Error(`유저 생성 실패: ${error.message} (코드: ${error.code})`);
    }

    return data;
  }

  async deleteUser(id: string): Promise<void> {
    const { error } = await supabase.from("user").delete().eq("id", id);
    if (error) throw new Error("유저 삭제 실패");
  }
}
