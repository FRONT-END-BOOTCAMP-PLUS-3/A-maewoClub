import { NextRequest, NextResponse } from "next/server";
import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { SbBoardRepository } from "@/infrastructure/repositories/boards/SbBoardRepostory";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { SbBoardImageRepository } from "@/infrastructure/repositories/boards/SbBoardImageRepository";
import { DfBoardListUsecase } from "@/application/board/DfBoardListUsecase";
import { BoardListDto } from "@/application/board/dto/BoardListDto";

// recipes/route
export async function GET() {
  const boardRepository: BoardRepository = new SbBoardRepository();
  const boardImageRepository: BoardImageRepository =
    new SbBoardImageRepository();
  const boardImageUsecase: DfBoardListUsecase = new DfBoardListUsecase(
    boardRepository,
    boardImageRepository
  );
  const BoardListDto: BoardListDto = await boardImageUsecase.execute();

  return NextResponse.json(BoardListDto);
}

export async function POST() {
  return NextRequest.toString();
}
