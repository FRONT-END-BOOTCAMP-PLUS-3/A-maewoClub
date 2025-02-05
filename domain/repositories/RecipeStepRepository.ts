import { RecipeStep } from "@/domain/entities/RecipeStep";

export interface RecipeStepRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeStep[]>;
  findDefaultStepRecipeId(recipeId: number): Promise<RecipeStep>;
  addStep(recipeId: number, stepNumber: number, description: string):void;
}
