import { Board } from "@/domain/entities/Board";
import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { createClient } from "@/utils/supabase/server";

export class SbBoardRepository implements BoardRepository {
  async count(): Promise<number> {
    const supabase = await createClient();
    const { count, error } = await supabase
      .from("board_post")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("유저 생성 중 오류 발생:", {
        message: error.message,
        code: error.code,
      });
    }

    return count || 0;
  }
  
  async findBoardByUserId(id:string): Promise<Board[]>{
    const supabase = await createClient();
    const {data, error} = await supabase
    .from("board_comment")
    .select("*")
    .eq("user_id", id)

    if (error) {
      console.error("Error fetching boards:", error.message);
      throw new Error("Failed to fetch boards");
    }
    const boards: Board[] = data.map((board): Board => {
      return {
        id: board.id,
        userId: board.user_id,
        title: board.title,
        description: board.description,
        tagId: board.tag_id,
        createdAt: board.created_at,
        updatedAt: board.updated_at,
        likeCount: board.like_count,
        viewCount: board.view_count,
      };
    });
    return boards || [];
  }

  async findAll(keyword: number, from: number, to: number): Promise<Board[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_post")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error fetching boards:", error.message);
      throw new Error("Failed to fetch boards");
    }

    const boards: Board[] = data.map((board): Board => {
      return {
        id: board.id,
        userId: board.user_id,
        title: board.title,
        description: board.description,
        tagId: board.tag_id,
        createdAt: board.created_at,
        updatedAt: board.updated_at,
        likeCount: board.like_count,
        viewCount: board.view_count,
      };
    });
    return boards || [];
  }
}
