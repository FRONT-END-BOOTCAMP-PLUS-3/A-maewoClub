import { RecipeIngredient } from "@/domain/entities/recipes/RecipeIngredient";

export interface RecipeIngredientRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeIngredient[]>;
  findDefaultIngredientByRecipeId(recipeId: number): Promise<RecipeIngredient>;
  addIngredient(recipeId: number, ingredient: { name: string; amount: string }): void;
}
