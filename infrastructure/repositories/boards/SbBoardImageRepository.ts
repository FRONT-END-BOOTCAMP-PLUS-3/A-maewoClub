import { BoardImage } from "@/domain/entities/BoardImage";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";

import { createClient } from "@/utils/supabase/server";

export class SbBoardImageRepository implements BoardImageRepository {
  async save(boardImage: BoardImage): Promise<BoardImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_image")
      .insert([
        {
          id: boardImage.id,
          user_id: boardImage.userId,
          photo_url: boardImage.photoUrl,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error(error);
    }

    return data || [] || null;
  }
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
      // .eq("is_default", true)
      .maybeSingle();
    if (error) {
      console.error(error);
      throw new Error("Failed to fetch default image");
    }

    return data || null;
  }
}
