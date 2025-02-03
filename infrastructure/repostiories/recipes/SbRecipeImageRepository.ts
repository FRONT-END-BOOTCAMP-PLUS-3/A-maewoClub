import { RecipeImage } from "@/domain/entities/recipes/RecipeImage";
import { RecipeImageRepository } from "@/domain/repositories/recipes/RecipeImageRepository";

import { createClient } from "@/utils/supabase/server";

export class SbRecipeImageRepository implements RecipeImageRepository {
  async findAllByRecipeId(id: number): Promise<RecipeImage[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_image")
      .select("*")
      .eq("recipe_id", id);

    if (error) {
      console.error(error);
    }

    return data || [];
  }

  async findDefaultImageByRecipeId(id: number): Promise<RecipeImage> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_image")
      .select("*")
      .eq("recipe_id", id)
      .single();

    if (error) {
      console.error(error);
    }

    return data || null;
  }
}
