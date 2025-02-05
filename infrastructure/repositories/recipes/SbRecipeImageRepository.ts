import { RecipeImage } from "@/domain/entities/recipes/RecipeImage";
import { RecipeImageRepository } from "@/domain/repositories/recipes/RecipeImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeImageRepository implements RecipeImageRepository {
  async findAllByRecipeId(recipeId: number): Promise<RecipeImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_image")
      .select("*")
      .eq("id", recipeId);

    if (error) {
      console.error(error);
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
      console.error(error);
    }

    return data || null;
  }
  
  async addRecipeImage(recipeId: number, imageUrl: string) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_image")
      .insert([{ recipe_id: recipeId, image_url: imageUrl }]);
  
    if (error) {
      throw new Error(error.message);
    }
  }
}
