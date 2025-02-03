
import { RecipeReviewImage } from "@/domain/entities/recipes/RecipeReviewImage";
import { RecipeReviewImageRepository } from "@/domain/repositories/RecipeReviewImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeReviewImageRepository
  implements RecipeReviewImageRepository
{
  async findAllByRecipeId(id: number): Promise<RecipeReviewImage[]> {
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

  async findDefaultImageByRecipeId(id: number): Promise<RecipeReviewImage> {
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
