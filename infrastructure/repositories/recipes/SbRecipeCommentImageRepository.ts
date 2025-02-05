import { RecipeCommentImage } from "@/domain/entities/RecipeCommentImage";
import { RecipeCommentImageRepository } from "@/domain/repositories/RecipeCommentImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeCommentImageRepository
  implements RecipeCommentImageRepository
{
  async findAllByRecipeId(
    recipeCommentId: number
  ): Promise<RecipeCommentImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment_image")
      .select("*")
      .eq("id", recipeCommentId);

    if (error) {
      console.error(error);
    }

    return data || [];
  }

  async findDefaultImageByRecipeId(
    recipeCommentId: number
  ): Promise<RecipeCommentImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment_image")
      .select("*")
      .eq("id", recipeCommentId)
      .single();

    if (error) {
      console.error(error);
    }

    return data || null;
  }

  async addRecipeCommentImage(
    recipeCommentId: number,
    imageUrl: string
  ): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_comment_image")
      .insert([{ id: recipeCommentId, imageUrl: imageUrl }]);

    if (error) {
      throw new Error(error.message);
    }
  }

  async deleteByImageId(id: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_comment_image")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  }
}
