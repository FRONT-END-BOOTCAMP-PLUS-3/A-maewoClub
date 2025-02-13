import { RecipeStep } from "@/domain/entities/RecipeStep";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeStepRepository implements RecipeStepRepository {
  async findAllByRecipeId(id: number): Promise<RecipeStep[]> {
    const supabase = await createClient();
    console.log(id, "✅recipe step 에서 id 확인합니다!!✅✅")
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

  async addStep(id: number, stepNumber: number, steps: RecipeStep) {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_step")
      .insert([{ id: stepNumber, recipe_id: id, steps }]);
  
    if (error) {
      throw new Error(error.message);
    }
  }

  async getStepsByRecipeId(id: number): Promise<RecipeStep[]>{
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_step")
      .update(id)
      .eq("recipe_id", id)
  
    if (error) {
      throw new Error("step put 중에 에러입니다~~" + error.message);
    }
    return data || [];
  }

  async deleteStepsByRecipeId(id: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_step")
      .delete()
      .eq("recipe_id", id)
  
    if (error) {
      throw new Error("step delete 중에 에러입니다~~" + error.message);
    }
  }
}
