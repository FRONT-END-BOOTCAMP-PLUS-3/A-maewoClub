import { BoardComment } from "@/domain/entities/boards/BoardComment";
import { BoardCommentRepository } from "@/domain/repositories/boards/BoardCommentRepository";
import { createClient } from "@/utils/supabase/server";

export class SbBoardImageRepository implements BoardCommentRepository {
  async findAllByBoardId(id: number): Promise<BoardComment[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_comment")
      .select("*")
      .eq("board_id", id);

    if (error) {
      console.error(error);
    }

    return data || [];
  }
}
