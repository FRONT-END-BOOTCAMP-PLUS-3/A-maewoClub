import { RecipeStep } from "@/domain/entities/RecipeStep";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";
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

  async addStep(recipeId: number, stepNumber: number, steps: RecipeStep) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_step")
      .insert([{ id: stepNumber, recipe_id: recipeId, steps }]);
  
    if (error) {
      throw new Error(error.message);
    }
  }

  async deleteStepsByRecipeId(recipeId: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_step")
      .delete()
      .eq("id", recipeId)
  
    if (error) {
      throw new Error("step delete 중에 에러입니다~~" + error.message);
    }
    
  }
}
