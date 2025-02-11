import { BoardCommentRepository } from "@/domain/repositories/BoardCommentRepository";
import { BoardComment } from "@/domain/entities/BoardComment";
import { createClient } from "@/utils/supabase/server";

export class SbBoardCommentRepository implements BoardCommentRepository {
  async findAllByBoardId(boardId: number): Promise<BoardComment[]> {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("board_comment")
        .select("*")
        .eq("board_id", boardId)
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data.map(this.mapToEntity);
    } catch (error) {
      console.error("댓글 목록 조회 실패:", error);
      throw error;
    }
  }

  async getCommentCount(boardId: number): Promise<number> {
    try {
      const supabase = await createClient();
      const { count, error } = await supabase
        .from("board_comment")
        .select("*", { count: "exact" })
        .eq("board_id", boardId);

      if (error) throw error;
      return count || 0;
    } catch (error) {
      console.error("댓글 수 조회 실패:", error);
      throw error;
    }
  }

  async create(
    comment: Omit<BoardComment, "id" | "createdAt" | "updatedAt">
  ): Promise<BoardComment> {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("board_comment")
        .insert([
          {
            board_id: comment.boardId,
            user_id: comment.userId,
            content: comment.content,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return this.mapToEntity(data);
    } catch (error) {
      console.error("댓글 생성 실패:", error);
      throw error;
    }
  }

  async update(id: number, content: string): Promise<BoardComment> {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("board_comment")
        .update({ content })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return this.mapToEntity(data);
    } catch (error) {
      console.error("댓글 수정 실패:", error);
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const supabase = await createClient();
      const { error } = await supabase
        .from("board_comment")
        .delete()
        .eq("id", id);

      if (error) throw error;
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
      throw error;
    }
  }

  async findById(id: number): Promise<BoardComment | null> {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("board_comment")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data ? this.mapToEntity(data) : null;
    } catch (error) {
      console.error("댓글 조회 실패:", error);
      throw error;
    }
  }

  private mapToEntity(data: BoardComment): BoardComment {
    return {
      id: data.id,
      boardId: data.boardId,
      userId: data.userId,
      content: data.content,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    };
  }
}
