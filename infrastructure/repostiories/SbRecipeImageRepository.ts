import { RecipeImage } from "@/domain/entities/RecipeImage";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeImageRepository implements RecipeImageRepository{
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
        .eq("is_default", true)
        .single();

    if (error) {
        console.error(error);
    }

    return data || null;
  }
}