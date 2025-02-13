import { NextRequest, NextResponse } from "next/server";
import { SbBoardRepository } from "@/infrastructure/repositories/boards/SbBoardRepository";
import { SbBoardImageRepository } from "@/infrastructure/repositories/boards/SbBoardImageRepository";
import { SbBoardCommentRepository } from "@/infrastructure/repositories/boards/SbBoardCommentRepository";
import { DfBoardDetailUsecase } from "@/application/board/DfBoardDetailUsecase";

export async function GET(req: NextRequest) {
  try {
    const boardIdParam = req.nextUrl.searchParams.get("id");
    if (!boardIdParam) {
      return NextResponse.json(
        { error: "board id가 필요합니다." },
        { status: 400 }
      );
    }

    const boardId = parseInt(boardIdParam, 10);
    if (isNaN(boardId)) {
      return NextResponse.json(
        { error: "board id는 숫자여야 합니다." },
        { status: 400 }
      );
    }

    const boardDetailUsecase = new DfBoardDetailUsecase(
      new SbBoardRepository(),
      new SbBoardImageRepository(),
      new SbBoardCommentRepository()
    );

    const boardDetail = await boardDetailUsecase.getBoardDetail(boardId);

    return NextResponse.json(boardDetail);
  } catch (error: any) {
    console.error("게시글 상세 정보 조회 오류:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const boardIdParam = req.nextUrl.searchParams.get("id");
    if (!boardIdParam) {
      return NextResponse.json(
        { error: "board id가 필요합니다." },
        { status: 400 }
      );
    }

    const boardId = parseInt(boardIdParam, 10);

    const boardDetailUsecase = new DfBoardDetailUsecase(
      new SbBoardRepository(),
      new SbBoardImageRepository(),
      new SbBoardCommentRepository()
    );

    const deletePost = await boardDetailUsecase.deleteBoard(boardId);
    return NextResponse.json({ message: "게시글 삭제 완료" });
  } catch (error) {
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
