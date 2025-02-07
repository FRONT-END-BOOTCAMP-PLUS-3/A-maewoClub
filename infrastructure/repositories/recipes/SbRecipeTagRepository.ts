import { RecipeTag } from "@/domain/entities/RecipeTag";
import { RecipeTagRepository } from "@/domain/repositories/RecipeTagRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeTagRepository implements RecipeTagRepository {
  async findAll(): Promise<RecipeTag[]> {
    const supabase = await createClient();
    console.log("Supabase Client 연결 확인 :", supabase);
    const { data, error } = await supabase.from("recipe_tag").select("*");

    console.log("Fetched Data 확인용:", data);

    if (error) {
      console.error("Supabase 에러:", {
        code: error.code,
        message: error.message,
        details: error.details,
      });
    }

    return data || ["h"];
  }
}
