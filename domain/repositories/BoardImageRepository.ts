import { BoardImage } from "../entities/BoardImage";

export interface BoardImageRepository {
  findAllByBoardId(BoardId: number): Promise<BoardImage[]>;
  findDefaultImageByBoardId(BoardId: number): Promise<BoardImage>;
}
