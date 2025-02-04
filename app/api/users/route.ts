import { NextRequest, NextResponse } from "next/server";
import {
  LoginUserUseCase,
  createUserUseCase,
} from "@/application/users/DfUsersUsecase";
import { UserRepository } from "@/domain/repositories/users/UserRepository";
import { SbUserRepository } from "@/infrastructure/repositories/users/SbUserRepository";

export async function POST(req: NextRequest) {
  try {
    const { nickname, email, provider } = await req.json();

    if (!email || !provider || !nickname) {
      return NextResponse.json(
        { error: "모든 필드를 입력해야 합니다." },
        { status: 400 }
      );
    }

    const user = await createUserUseCase.execute(nickname, email, provider);

    return NextResponse.json({ user });
  } catch (error) {
    console.error("❌ 서버 오류 발생:", error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const userRepository: UserRepository = new SbUserRepository();
    const loginUseCase = new LoginUserUseCase(userRepository);
    const userDto = await loginUseCase.execute();

    return NextResponse.json(userDto);
  } catch (error) {
    console.error("❌ GET 요청 처리 중 오류 발생:", error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
