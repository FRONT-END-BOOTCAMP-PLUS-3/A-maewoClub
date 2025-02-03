import { NextRequest, NextResponse } from "next/server";
import { BoardRepository } from "@/domain/repositories/boards/BoardRepository";
import { SbBoardRepository } from "@/infrastructure/repositories/boards/SbBoardRepostory";
import { BoardImageRepository } from "@/domain/repositories/boards/BoardImageRepository";
import { SbBoardImageRepository } from "@/infrastructure/repositories/boards/SbBoardImageRepository";
import { DfBoardsListUsecase } from "@/application/boards/DfBoardListUsecase";
import { BoardListDto } from "@/application/boards/dto/BoardListDto";

// recipes/route
export async function GET() {
  const boardRepository: BoardRepository = new SbBoardRepository();
  const boardImageRepository: BoardImageRepository =
    new SbBoardImageRepository();
  const boardImageUsecase: DfBoardsListUsecase = new DfBoardsListUsecase(
    boardRepository,
    boardImageRepository
  );
  const BoardListDto: BoardListDto = await boardImageUsecase.execute();

  return NextResponse.json(BoardListDto);
}

export async function POST() {
  return NextRequest.toString();
}
