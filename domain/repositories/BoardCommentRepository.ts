import { BoardComment } from "@/domain/entities/BoardComment";

export interface BoardCommentRepository {
  findAllByBoardId(boardId: number): Promise<BoardComment[]>;
  getCommentCount(boardId: number): Promise<number>;
  create(
    comment: Omit<BoardComment, "id" | "createdAt" | "updatedAt">
  ): Promise<BoardComment>;
  update(id: number, content: string): Promise<BoardComment>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<BoardComment | null>;
}
