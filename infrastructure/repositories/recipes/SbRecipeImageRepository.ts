import { RecipeImage } from "@/domain/entities/RecipeImage";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeImageRepository implements RecipeImageRepository {
  async deleteImagesByRecipeId(recipeId: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("board_image")
      .delete()
      .eq("id", recipeId);

    if (error) {
      console.error("레시피 삭제 중 에러발생 : " + error);
    }
  }
  
  async findAllByRecipeId(recipeId: number): Promise<RecipeImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_image")
      .select("*")
      .eq("id", recipeId);

    if (error) {
      console.error("레시피 전체 패칭 중 에러발생 : " + error);
    }

    return data || [];
  }

  async findDefaultImageByRecipeId(recipeId: number): Promise<RecipeImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_image")
      .select("*")
      .eq("id", recipeId)
      .single();

    if (error) {
      console.error("" + error);
    }

    return data || null;
  }

  async addRecipeImage(recipeId: number, imageUrl: string) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_image")
      .insert([{ image_url: imageUrl }])
      .eq("id", recipeId);

    if (error) {
      throw new Error("레시피 이미지 업로드중 에러 : " + error.message);
    }
  }
}
