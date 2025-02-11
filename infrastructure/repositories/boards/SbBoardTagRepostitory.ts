import { BoardTag } from "@/domain/entities/BoardTag";
import { BoardTagRepository } from "@/domain/repositories/BoardTagRepository";
import { createClient } from "@/utils/supabase/server";

export class SbBoardTagRepostiory implements BoardTagRepository {
  async findAll(): Promise<BoardTag[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("board_tag").select("*");
    if (error) {
      console.error("Supabase 에러:", {
        code: error.code,
        message: error.message,
        details: error.details,
      });
    }

    return data || [];
  }
}
