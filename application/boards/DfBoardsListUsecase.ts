import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { BoardListDto } from "./dto/BoardListDto";
import { Board } from "@/domain/entities/Board";
import { BoardDto } from "./dto/BoardDto";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { BoardImage } from "@/domain/entities/BoardImage";

export class DfMenuListUsecase {
  //  이름 메뉴로 가도 좋을지?
  // entities 파일 분리하지 않아도 되는지 확인
  constructor(
    private repository: BoardRepository,
    private boardImageRepository: BoardImageRepository
  ) {}

  // execute();
  async execute(id: number = 1, page: number = 1): Promise<BoardListDto> {
    const from = (page - 1) * 8;
    const to = page * 8 - 1;

    const menus: Board[] = await this.repository.findAll(id, from, to);

    const boardDtos: BoardDto[] = await Promise.all(
      menus.map(async (board: Board) => {
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
