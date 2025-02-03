import { BoardComment } from "@/domain/entities/boards/BoardComment";

export interface BoardCommentRepository {
  findAllByBoardId(BoardId: number): Promise<BoardComment[]>;
}
