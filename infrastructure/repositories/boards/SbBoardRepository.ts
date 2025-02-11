import { BoardCreateDto } from "@/application/board/dto/BoardCreateDto";
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

  async findOne(id: number): Promise<Board> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("board_post")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("게시글 상세 조회 오류:", error.message);
      throw new Error("게시글 상세 조회에 실패했습니다.");
    }

    return {
      id: data.id,
      userId: data.user_id,
      title: data.title,
      description: data.description,
      tagId: data.tag_id,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      likeCount: data.like_count,
      viewCount: data.view_count,
    };
  }

  async addPost(board: BoardCreateDto): Promise<number> {
    const supabase = await createClient();

    const insertPayload = {
      user_id: board.userId,
      title: board.title,
      description: board.description,
      tag_id: Number(board.tagId),
    };

    const { data, error } = await supabase
      .from("board_post")
      .insert(insertPayload)
      .select()
      .single();

    if (error || !data) {
      throw new Error(`게시글 저장 실패: ${error?.message}`);
    }

    return data.id;
  }
}
