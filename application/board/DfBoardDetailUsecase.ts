import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { BoardCommentRepository } from "@/domain/repositories/BoardCommentRepository";
import { BoardDetailDto } from "./dto/BoardDetailDto";

export class DfBoardDetailUsecase {
  constructor(
    private boardRepository: BoardRepository,
    private boardImageRepository: BoardImageRepository,
    private boardCommentRepository: BoardCommentRepository
  ) {}

  async getBoardDetail(boardId: number): Promise<BoardDetailDto> {
    const board = await this.boardRepository.findOne(boardId);
    if (!board) {
      throw new Error("게시글을 찾을 수 없습니다.");
    }

    const images = await this.boardImageRepository.findAllByBoardId(boardId);

    const comments = await this.boardCommentRepository.findAllByBoardId(
      boardId
    );

    const boardDetail: BoardDetailDto = {
      id: board.id,
      userId: board.userId,
      title: board.title,
      description: board.description,
      tagId: board.tagId,
      createdAt: board.createdAt,
      updatedAt: board.updatedAt,
      likeCount: board.likeCount,
      viewCount: board.viewCount,
      images: images.map((img) => ({ photoUrl: img.photo_url })),
      comments: comments.map((comment) => ({
        id: comment.id,
        content: comment.content,
        boardId: comment.boardId,
        userId: comment.userId,
        createdAt: comment.createdAt,
      })),
    };

    return boardDetail;
  }
}
