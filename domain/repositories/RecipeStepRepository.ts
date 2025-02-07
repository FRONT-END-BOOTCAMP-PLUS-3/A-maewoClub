import { RecipeStep } from "@/domain/entities/RecipeStep";

export interface RecipeStepRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeStep[]>;
  findDefaultStepRecipeId(recipeId: number): Promise<RecipeStep>;
  addStep(recipeId: number, stepNumber: number, steps: RecipeStep):void;
  getStepsByRecipeId(recipeId: number):Promise<RecipeStep[]>;
  deleteStepsByRecipeId(recipeId: number): Promise<void>;
}
