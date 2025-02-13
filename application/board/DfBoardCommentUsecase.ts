import { BoardCommentRepository } from "@/domain/repositories/BoardCommentRepository";
import { BoardComment } from "@/domain/entities/BoardComment";
import {
  BoardCommentDto,
  BoardCommentListDto,
  CreateBoardCommentDto,
  UpdateBoardCommentDto,
} from "./dto/BoardCommentDto";

export class DfBoardCommentUsecase {
  constructor(private boardCommentRepository: BoardCommentRepository) {}

  private mapToDto(comment: BoardComment): BoardCommentDto {
    return {
      id: comment.id,
      boardId: comment.boardId,
      userId: comment.userId,
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    };
  }

  // Create
  async createComment(dto: CreateBoardCommentDto): Promise<BoardCommentDto> {
    try {
      const comment = await this.boardCommentRepository.create({
        boardId: dto.boardId,
        userId: dto.userId,
        content: dto.content,
      });
      return this.mapToDto(comment);
    } catch (error) {
      console.error("댓글 작성 실패:", error);
      throw error;
    }
  }

  // Read
  async getCommentList(boardId: number): Promise<BoardCommentListDto> {
    try {
      const comments = await this.boardCommentRepository.findAllByBoardId(
        boardId
      );
      const totalCount = await this.boardCommentRepository.getCommentCount(
        boardId
      );

      return {
        comments: comments.map((comment) => this.mapToDto(comment)),
        totalCount,
      };
    } catch (error) {
      console.error("댓글 목록 조회 실패:", error);
      throw error;
    }
  }

  // Update
  async updateComment(dto: UpdateBoardCommentDto): Promise<BoardCommentDto> {
    try {
      const comment = await this.boardCommentRepository.update(
        dto.id,
        dto.content
      );
      return this.mapToDto(comment);
    } catch (error) {
      console.error("댓글 수정 실패:", error);
      throw error;
    }
  }

  // Delete
  async deleteComment(id: number): Promise<void> {
    try {
      await this.boardCommentRepository.delete(id);
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
      throw error;
    }
  }
}
