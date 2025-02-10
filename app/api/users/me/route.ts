import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { getUserByEmailUseCase } from "@/application/users/DfUsersUsecase";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "인증 토큰이 없습니다." },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = verify(token, process.env.JWT_SECRET!) as {
        userId: string;
        email: string;
      };
    } catch (err) {
      return NextResponse.json(
        { error: "유효하지 않은 토큰입니다." },
        { status: 401 }
      );
    }

    const userDto = await getUserByEmailUseCase.execute(decoded.email);
    if (!userDto) {
      return NextResponse.json(
        { error: "유저 정보를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ user: userDto });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
