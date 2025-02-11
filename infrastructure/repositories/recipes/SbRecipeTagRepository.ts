import { RecipeTag } from "@/domain/entities/RecipeTag";
import { RecipeTagRepository } from "@/domain/repositories/RecipeTagRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeTagRepository implements RecipeTagRepository {
  async findAll(): Promise<RecipeTag[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("recipe_tag").select("*");

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
