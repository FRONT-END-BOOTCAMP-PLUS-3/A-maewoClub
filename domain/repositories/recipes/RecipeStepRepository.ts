import { RecipeStep } from "@/domain/entities/recipes/RecipeStep";

export interface RecipeStepRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeStep[]>;
  findDefaultStepRecipeId(recipeId: number): Promise<RecipeStep>;
}
