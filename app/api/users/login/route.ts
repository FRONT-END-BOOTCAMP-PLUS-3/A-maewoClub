import {
  checkUserPasswordUseCase,
  getUserByEmailUseCase,
} from "@/application/users/DfUsersUsecase";
import { sign } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "이메일과 비밀번호를 입력하세요." },
        { status: 400 }
      );
    }

    const isPasswordValid = await checkUserPasswordUseCase.execute(
      email,
      password
    );
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "이메일 또는 비밀번호가 일치하지 않습니다." },
        { status: 401 }
      );
    }

    const user = await getUserByEmailUseCase.execute(email);
    if (!user) {
      return NextResponse.json(
        { error: "유저 정보를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const token = sign(
      { userId: user.id, email: user.email, nickname: user.nickname },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return NextResponse.json({
      token,
      user,
    });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
