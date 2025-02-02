import { BoardImage } from "@/domain/entities/BoardImage";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbBoardImageRepository implements BoardImageRepository {
  async findAllByBoardId(id: number): Promise<BoardImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_image")
      .select("*")
      .eq("board_id", id);

    if (error) {
      console.error(error);
    }

    return data || [];
  }

  async findDefaultImageByBoardId(id: number): Promise<BoardImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_image")
      .select("*")
      .eq("board_id", id)
      .eq("is_default", true)
      .single();

    if (error) {
      console.error(error);
    }

    return data || null;
  }
}
