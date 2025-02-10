import {
  createUserUseCase,
  deleteUserUseCase,
  findUserByUserIdUseCase,
} from "@/application/users/DfUsersUsecase";
import { NextRequest, NextResponse } from "next/server";

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
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await findUserByUserIdUseCase.execute(params.id);
    if (!user) {
      return NextResponse.json(
        { error: "유저를 찾을 수 없습니다." },
        { status: 404 }
      );
    }
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deleteUserUseCase.execute(params.id);
    return NextResponse.json({ message: "유저 삭제 완료" });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
