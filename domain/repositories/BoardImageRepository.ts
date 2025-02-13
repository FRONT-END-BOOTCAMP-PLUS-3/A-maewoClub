import { BoardImageDto } from "@/application/board/dto/BoardImageDto";
import { BoardImage } from "@/domain/entities/BoardImage";

export interface BoardImageRepository {
  findAllByBoardId(boardId: number): Promise<BoardImage[]>;
  findDefaultImageByBoardId(boardId: number): Promise<BoardImage>;
  addBoardImages(boardImages: BoardImageDto[]): Promise<void>;
}
