import { BoardImage } from "@/domain/entities/boards/BoardImage";
import { BoardImageRepository } from "@/domain/repositories/boards/BoardImageRepository";

import { createClient } from "@/utils/supabase/server";

export class SbBoardImageRepository implements BoardImageRepository {
  async findAllByBoardId(id: number): Promise<BoardImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_image")
      .select("*")
      .eq("id", id);

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
      .eq("id", id)
      .eq("is_default", true)
      .single();

    if (error) {
      console.error(error);
    }

    return data || null;
  }
}
