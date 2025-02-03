import { RecipeCommentImage } from "@/domain/entities/recipes/RecipeCommentImage";
import { RecipeCommentImageRepository } from "@/domain/repositories/recipes/RecipeCommentImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeCommentImageRepository
  implements RecipeCommentImageRepository
{
  async findAllByRecipeId(id: number): Promise<RecipeCommentImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment_image")
      .select("*")
      .eq("user_id", id);

    if (error) {
      console.error(error);
    }

    return data || [];
  }

  async findDefaultImageByRecipeId(id: number): Promise<RecipeCommentImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment_image")
      .select("*")
      .eq("user_id", id)
      .eq("is_default", true)
      .single();

    if (error) {
      console.error(error);
    }

    return data || null;
  }
}
