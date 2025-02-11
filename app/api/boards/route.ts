import { NextRequest, NextResponse } from "next/server";
import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { SbBoardImageRepository } from "@/infrastructure/repositories/boards/SbBoardImageRepository";
import { DfBoardListUsecase } from "@/application/board/DfBoardListUsecase";
import { BoardListDto } from "@/application/board/dto/BoardListDto";
import { SbBoardRepository } from "@/infrastructure/repositories/boards/SbBoardRepository";
import { DfBoardCreateUsecase } from "@/application/board/DfBoardCreateUsecase";
import { BoardCreateDto } from "@/application/board/dto/BoardCreateDto";

export async function GET() {
  const boardRepository: BoardRepository = new SbBoardRepository();
  const boardImageRepository: BoardImageRepository =
    new SbBoardImageRepository();
  const boardImageUsecase: DfBoardListUsecase = new DfBoardListUsecase(
    boardRepository,
    boardImageRepository
  );

  const boardListDto: BoardListDto = await boardImageUsecase.execute();

  return NextResponse.json(boardListDto);
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const userId = formData.get("userId") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const tagIdStr = formData.get("tagId") as string;
    const tagId = tagIdStr ? parseInt(tagIdStr, 10) : 0;
    const files = formData.getAll("files") as File[];

    const images = await Promise.all(
      files.map(async (file) => {
        const publicUrl = process.env.SUPABASE_STORAGE + file.name;
        return { photoUrl: publicUrl };
      })
    );

    const boardCreateDto: BoardCreateDto = {
      userId,
      title,
      description,
      tagId,
      images,
    };

    const boardRepository: BoardRepository = new SbBoardRepository();
    const boardImageRepository: BoardImageRepository =
      new SbBoardImageRepository();
    const boardCreateUsecase: DfBoardCreateUsecase = new DfBoardCreateUsecase(
      boardRepository,
      boardImageRepository
    );

    const boardId = await boardCreateUsecase.addPost(boardCreateDto);

    return NextResponse.json({
      message: "게시글 등록에 성공했습니다.",
      boardId,
    });
  } catch (error: any) {
    console.error("Error processing POST request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
