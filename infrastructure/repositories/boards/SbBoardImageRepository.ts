import { BoardImage } from "@/domain/entities/BoardImage";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbBoardImageRepository implements BoardImageRepository {
  async addBoardImage(boardId: number, photoUrl: string): Promise<void> {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("board_image")
      .insert([
        {
          id: boardId,
          photo_url: photoUrl,
        },
      ])
      .select()
      .single();

    if (error || !data) {
      throw new Error(`게시글 이미지 저장 실패: ${error?.message}`);
    }
  }

  async findAllByBoardId(id: number): Promise<BoardImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_image")
      .select("*")
      .eq("id", id);

    if (error) {
      console.error("게시글 이미지 조회 오류:", error.message);
      throw new Error("게시글 이미지 조회에 실패했습니다.");
    }

    return data || [];
  }

  async findDefaultImageByBoardId(id: number): Promise<BoardImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_image")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("기본 게시글 이미지 조회 오류:", error.message);
      throw new Error("기본 게시글 이미지 조회에 실패했습니다.");
    }

    return data || null;
  }
}
