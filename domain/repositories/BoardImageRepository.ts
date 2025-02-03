import { BoardImage } from "../entities/boards/BoardImage";

export interface BoardImageRepository {
  findAllByBoardId(BoardId: number): Promise<BoardImage[]>;
  findDefaultImageByBoardId(BoardId: number): Promise<BoardImage>;
}
