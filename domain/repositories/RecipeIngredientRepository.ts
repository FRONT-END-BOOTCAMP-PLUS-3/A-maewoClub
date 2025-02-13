import { RecipeIngredient } from "@/domain/entities/RecipeIngredient";

export interface RecipeIngredientRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeIngredient[]>;
  updateByRecipeId(recipeId: number): Promise<RecipeIngredient[]>;
  addIngredient(recipeId: number, ingredient: RecipeIngredient): void;
  deleteIngredientsByRecipeId(recipeId: number): void;
}
