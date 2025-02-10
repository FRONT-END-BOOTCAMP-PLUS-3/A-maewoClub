import { BoardImage } from "@/domain/entities/BoardImage";

export interface BoardImageRepository {
  findAllByBoardId(boardId: number): Promise<BoardImage[]>;
  findDefaultImageByBoardId(boardId: number): Promise<BoardImage>;
  addBoardImage(boardId: number, photoUrl: string): Promise<void>;
}
