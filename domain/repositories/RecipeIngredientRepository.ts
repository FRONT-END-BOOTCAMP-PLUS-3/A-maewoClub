import { RecipeIngredient } from "@/domain/entities/RecipeIngredient";

export interface RecipeIngredientRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeIngredient[]>;
  findDefaultByRecipeId(recipeId: number): Promise<RecipeIngredient>;
  addIngredient(recipeId: number, ingredient: RecipeIngredient): void;
  deleteIngredientsByRecipeId(recipeId: number): void;
}
