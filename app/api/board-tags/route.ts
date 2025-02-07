import { NextResponse } from "next/server";
import { SbBoardTagRepostiory } from "@/infrastructure/repositories/boards/SbBoardTagRepostitory";
import { BoardTagRepository } from "@/domain/repositories/BoardTagRepository";
import { DfBoardTagUsecase } from "@/application/board/DfBoardTagUsecase";

export async function GET() {
  const boardTagRepository: BoardTagRepository = new SbBoardTagRepostiory();
  const boardTagUsecase = new DfBoardTagUsecase(boardTagRepository);

  try {
    const tags = await boardTagUsecase.findAll();
    return NextResponse.json(tags);
  } catch (error) {
    console.error("태그 데이터 가져오기 실패:", error);
    return NextResponse.json(
      { error: "태그 데이터를 가져오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
