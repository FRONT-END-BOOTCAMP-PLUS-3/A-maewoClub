import { Board } from "@/domain/entities/boards/Board";
import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { createClient } from "@/utils/supabase/server";

export class SbBoardRepository implements BoardRepository {
  async count(): Promise<number> {
    const supabase = await createClient();
    const { count, error } = await supabase
      .from("board")
      .select("*", { count: "exact", head: true });

    if (error) {
      throw new Error(error.message);
    }

    return count || 0;
  }

  async findAll(keyword: number, from: number, to: number): Promise<Board[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board")
      .select("*")
      .ilike("title", `%${keyword}%`)
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
      };
    });
    return boards || [];
  }
}
