import { RecipeIngredient } from "@/domain/entities/RecipeIngredient";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeIngredientRepository
  implements RecipeIngredientRepository
{
  async findAllByRecipeId(id: number): Promise<RecipeIngredient[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_ingredient")
      .select("*")
      .eq("recipe_id", id);

    if (error) {
      console.error(error);
    }

    return data || [];
  }

  async updateByRecipeId(id: number): Promise<RecipeIngredient[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_ingredient")
      .select("*")
      .eq("recipe_id", id)
      .single();

    if (error) {
      console.error(error);
    }

    return data || null;
  }

  /*
    export class RecipeCommentImageService {
    async updateByCommentId(commentId: number, imageData: Partial<RecipeCommentImage>): Promise<RecipeCommentImage | null> {
    try {
      const supabase = await createClient();
      
      // 먼저 해당 comment_id가 recipe_comment 테이블에 존재하는지 확인
      const { data: commentExists, error: commentError } = await supabase
        .from("recipe_comment")
        .select("id")
        .eq("id", commentId)
        .single();

      if (commentError || !commentExists) {
        throw new Error(`Recipe comment with id ${commentId} does not exist`);
      }

      // 이미지 데이터 업데이트
      const { data, error } = await supabase
        .from("recipe_comment_image")
        .upsert({
          recipe_comment_id: commentId,
          ...imageData,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'recipe_comment_id'  // recipe_comment_id를 기준으로 upsert
        })
        .select()
        .single();

      if (error) {
        console.error("Error updating recipe comment image:", error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error("Error in updateByCommentId:", error);
      throw error;
    }
  */

  async addIngredient(recipeId: number, ingredient: RecipeIngredient) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_ingredient")
      .insert([{ recipe_id: recipeId, ...ingredient }]);

    if (error) {
      throw new Error(error.message);
    }
  }

  async deleteIngredientsByRecipeId(recipeId: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_ingredient")
      .delete()
      .eq("id", recipeId);

    if (error) {
      throw new Error("ingredient delete 중에 error 입니다~" + error.message);
    }
  }
}
