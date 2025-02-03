import { RecipeIngredient } from "@/domain/entities/recipes/RecipeIngredient";
import { RecipeIngredientRepository } from "@/domain/repositories/recipes/RecipeIngredientRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeIngredientRepository implements RecipeIngredientRepository{
  async findAllByRecipeId(recipeId: number): Promise<RecipeIngredient[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_ingredient")
      .select("*")
      .eq("recipe_id", recipeId);

    if (error) {
      console.error(error);
    }

    return data || [];
  }

  async findDefaultIngredientByRecipeId(recipeId: number): Promise<RecipeIngredient> {
    const supabase = await createClient();
       const { data, error } = await supabase
         .from("recipe_ingredient")
         .select("*")
         .eq("recipe_id", recipeId)
         .eq("is_default", true)
         .single();
   
       if (error) {
         console.error(error);
       }
   
       return data || null;
  }

}
