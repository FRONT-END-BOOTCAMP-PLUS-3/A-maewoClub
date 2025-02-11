import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { BoardCreateDto } from "./dto/BoardCreateDto";
import { BoardImageDto } from "./dto/BoardImageDto";
import { SbBoardRepository } from "@/infrastructure/repositories/boards/SbBoardRepository";
import { SbBoardImageRepository } from "@/infrastructure/repositories/boards/SbBoardImageRepository";

export class DfBoardCreateUsecase {
  constructor(
    private boardRepository: BoardRepository = new SbBoardRepository(),
    private boardImageRepository: BoardImageRepository = new SbBoardImageRepository()
  ) {}

  async addPost(board: BoardCreateDto): Promise<number> {
    try {
      const boardId = await this.boardRepository.addPost(board);
      if (board.images && board.images.length > 0) {
        const boardImages: BoardImageDto[] = board.images.map((img) => ({
          boardId,
          file: img.file,
        }));
        await this.boardImageRepository.addBoardImages(boardImages);
      }
      return boardId;
    } catch (error: any) {
      console.error("Board creation error:", error);
      throw new Error("Board creation failed: " + error.message);
    }
  }
}
