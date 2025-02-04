import { RecipeStep } from "@/domain/entities/recipes/RecipeStep";
import { RecipeStepRepository } from "@/domain/repositories/recipes/RecipeStepRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeStepRepository implements RecipeStepRepository {
  async findAllByRecipeId(id: number): Promise<RecipeStep[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_step")
      .select("*")
      .eq("recipe_id", id);

    if (error) {
      console.error(error);
    }

    return data || [];
  }

  async findDefaultStepRecipeId(id: number): Promise<RecipeStep> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_step")
      .select("*")
      .eq("recipe_id", id)
      .single();

    if (error) {
      console.error(error);
    }

    return data || null;
  }

  async addStep(recipeId: number, stepNumber: number, description: string) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_step")
      .insert([{ recipe_id: recipeId, step_number: stepNumber, description }]);
  
    if (error) {
      throw new Error(error.message);
    }
  }
}
