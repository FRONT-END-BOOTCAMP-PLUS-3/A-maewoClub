import { BoardComment } from "@/domain/entities/BoardComment";

export interface BoardCommentRepository {
  findAllByBoardId(BoardId: number): Promise<BoardComment[]>;
}
