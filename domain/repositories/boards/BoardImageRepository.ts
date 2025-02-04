import { BoardImage } from "@/domain/entities/boards/BoardImage";

export interface BoardImageRepository {
  findAllByBoardId(boardId: number): Promise<BoardImage[]>;
  findDefaultImageByBoardId(boardId: number): Promise<BoardImage>;
  save(boardImage: BoardImage): Promise<BoardImage>;
}
