import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { BoardListDto } from "./dto/BoardListDto";
import { Board } from "@/domain/entities/boards/Board";
import { BoardDto } from "./dto/BoardDto";

import { BoardImage } from "@/domain/entities/boards/BoardImage";
import { BoardImageRepository } from "@/domain/repositories/boards/BoardImageRepository";

export class DfBoardsListUsecase {
  constructor(
    private repository: BoardRepository,
    private boardImageRepository: BoardImageRepository
  ) {}

  // execute();
  async execute(id: number = 1, page: number = 1): Promise<BoardListDto> {
    const from = (page - 1) * 8;
    const to = page * 8 - 1;

    const boards: Board[] = await this.repository.findAll(id, from, to);

    const boardDtos: BoardDto[] = await Promise.all(
      boards.map(async (board: Board) => {
        const image: BoardImage | null =
          await this.boardImageRepository.findDefaultImageByBoardId(board.id);

        return {
          ...board,
          img: image ? image.photoUrl : "default.svg",
        };
      })
    );

    const totalCount: number = await this.repository.count();

    return {
      boards: boardDtos,
      totalCount,
      totalPages: Math.ceil(totalCount / 8),
      hasPreviousPage: page > 1,
      hasNextPage: page < Math.ceil(totalCount / 8),
      pages: Array.from({ length: Math.ceil(totalCount / 8) }, (_, i) => i + 1),
    };
  }
}
