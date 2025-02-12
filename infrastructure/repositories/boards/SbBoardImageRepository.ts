import { BoardImageDto } from "@/application/board/dto/BoardImageDto";
import { BoardImage } from "@/domain/entities/BoardImage";
import { BoardImageRepository } from "@/domain/repositories/BoardImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbBoardImageRepository implements BoardImageRepository {
  async addBoardImages(boardImages: BoardImageDto[]): Promise<void> {
    if (!boardImages || boardImages.length === 0) return;
    const supabase = await createClient();
    const insertData: Array<{ board_id: number; photo_url: string }> = [];
    for (let i = 0; i < boardImages.length; i++) {
      const { boardId, file } = boardImages[i];
      const filePath = `/board/image_${boardId}_${Date.now()}_${i}.png`;
      console.log(filePath);
      const { error: storageError } = await supabase.storage
        .from("image")
        .upload(filePath, file, { upsert: true });

      if (storageError) {
        throw new Error("Storage upload failed: " + storageError.message);
      }
      const { data: urlData } = supabase.storage
        .from("image")
        .getPublicUrl(filePath);
      console.log(urlData);
      if (!urlData?.publicUrl) {
        throw new Error("Failed to get public URL");
      }
      insertData.push({
        board_id: boardId,
        photo_url: urlData.publicUrl,
      });
    }
    const { data, error } = await supabase
      .from("board_image")
      .insert(insertData)
      .select();

    if (error) {
      console.error("🔥 Image insert failed:", error);
      throw new Error(`Image insert failed: ${error.message}`);
    }

    if (!data) {
      console.error("🔥 Insert returned no data!");
      throw new Error("Image insert failed: No data returned from Supabase");
    }
  }

  async findAllByBoardId(id: number): Promise<BoardImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_image")
      .select("*")
      .eq("board_id", id);

    if (error) {
      console.error("게시글 이미지 조회 오류:", error.message);
      throw new Error("게시글 이미지 조회에 실패했습니다.");
    }

    return data;
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
