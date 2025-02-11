import { NextRequest, NextResponse } from "next/server";
import { DfBoardCommentUsecase } from "@/application/board/DfBoardCommentUsecase";
import { SbBoardCommentRepository } from "@/infrastructure/repositories/boards/SbBoardCommentRepository";

// 댓글 목록 조회
export async function GET(request: NextRequest) {
  const boardId = request.nextUrl.searchParams.get("boardId");

  if (!boardId) {
    return NextResponse.json(
      { error: "게시글 ID가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const commentRepository = new SbBoardCommentRepository();
    const commentUsecase = new DfBoardCommentUsecase(commentRepository);
    const result = await commentUsecase.getCommentList(parseInt(boardId));
    return NextResponse.json(result);
  } catch (error) {
    console.error("댓글 목록 조회 실패:", error);
    return NextResponse.json(
      { error: "댓글을 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// 댓글 작성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const commentRepository = new SbBoardCommentRepository();
    const commentUsecase = new DfBoardCommentUsecase(commentRepository);
    const result = await commentUsecase.createComment(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("댓글 작성 실패:", error);
    return NextResponse.json(
      { error: "댓글 작성에 실패했습니다." },
      { status: 500 }
    );
  }
}

// 댓글 수정
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const commentRepository = new SbBoardCommentRepository();
    const commentUsecase = new DfBoardCommentUsecase(commentRepository);
    const result = await commentUsecase.updateComment(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("댓글 수정 실패:", error);
    return NextResponse.json(
      { error: "댓글 수정에 실패했습니다." },
      { status: 500 }
    );
  }
}

// 댓글 삭제
export async function DELETE(request: NextRequest) {
  const commentId = request.nextUrl.searchParams.get("id");

  if (!commentId) {
    return NextResponse.json(
      { error: "댓글 ID가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const commentRepository = new SbBoardCommentRepository();
    const commentUsecase = new DfBoardCommentUsecase(commentRepository);
    await commentUsecase.deleteComment(parseInt(commentId));
    return NextResponse.json({ message: "댓글이 삭제되었습니다." });
  } catch (error) {
    console.error("댓글 삭제 실패:", error);
    return NextResponse.json(
      { error: "댓글 삭제에 실패했습니다." },
      { status: 500 }
    );
  }
}
