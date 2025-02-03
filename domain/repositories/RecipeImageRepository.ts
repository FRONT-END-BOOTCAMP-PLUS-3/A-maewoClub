import { RecipeImage } from "../entities/recipes/RecipeImage";

export interface RecipeImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeImage[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeImage>;
}
