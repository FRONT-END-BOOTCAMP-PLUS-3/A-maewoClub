import { RecipeIngredient } from "@/domain/entities/RecipeIngredient";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeIngredientRepository implements RecipeIngredientRepository{
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

  async findDefaultByRecipeId(id: number): Promise<RecipeIngredient> {
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

  async addIngredient(recipeId: number, ingredient: RecipeIngredient){
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
      .eq("id", recipeId)
  
    if (error) {
      throw new Error("ingredient delete 중에 error 입니다~" + error.message);
    }
  }

}
