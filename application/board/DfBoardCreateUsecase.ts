import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { SbBoardImageRepository } from "@/infrastructure/repositories/boards/SbBoardImageRepository";
import { SbBoardRepository } from "@/infrastructure/repositories/boards/SbBoardRepository";
import { BoardCreateDto } from "./dto/BoardCreateDto";
import { BoardImageDto } from "./dto/BoardImageDto";

export class DfBoardCreateUsecase {
  constructor(
    private boardRepository: BoardRepository = new SbBoardRepository(),
    private boardImageRepository: BoardImageRepository = new SbBoardImageRepository()
  ) {}

  async addPost(board: BoardCreateDto): Promise<number> {
    try {
      const boardId = await this.boardRepository.addPost(board);

      if (board.images && board.images.length > 0) {
        await Promise.all(
          board.images.map((imageDto: BoardImageDto) =>
            this.boardImageRepository.addBoardImage(boardId, imageDto.photoUrl)
          )
        );
      }

      return boardId;
    } catch (error) {
      console.error("게시글 생성 중 오류 발생:", error);
      throw new Error("게시글 생성 실패");
    }
  }
}
