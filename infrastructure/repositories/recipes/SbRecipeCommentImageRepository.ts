import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";
import { RecipeCommentImageUpdateDto } from "@/application/recipe-comment/dto/RecipeCommentImageUpdate";
import { RecipeCommentImage } from "@/domain/entities/RecipeCommentImage";
import { RecipeCommentImageRepository } from "@/domain/repositories/RecipeCommentImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeCommentImageRepository
  implements RecipeCommentImageRepository
{
  async findOne(id: number): Promise<RecipeCommentImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment_image")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
    }
    return data || [];
  }

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
     recipeCommentImage: RecipeCommentImageDto
  ) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_comment_image")
      .insert([{ 
        id: recipeCommentImage.id,
        photo_url: recipeCommentImage.photoUrl,
        created_at: recipeCommentImage.createdAt,
        updated_at: recipeCommentImage.updatedAt,
        user_id: recipeCommentImage.userId,
       }])
      .eq("id", recipeCommentImage.id);

    if (error) {
      throw new Error(error.message);
    }
  }

  async updateRecipeCommentImage(
    recipeCommentImage: RecipeCommentImageUpdateDto
  ) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_comment_image")
      .update({
        id: recipeCommentImage.id,
        photo_url: recipeCommentImage.photoUrl,
        created_at: recipeCommentImage.createdAt,
        updated_at: recipeCommentImage.updatedAt,
        user_id: recipeCommentImage.userId,
      })
      .eq("id", recipeCommentImage.id);

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
