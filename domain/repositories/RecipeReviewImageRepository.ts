import { RecipeReviewImage } from "../entities/RecipeReviewImage";

export interface RecipeReviewImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeReviewImage[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeReviewImage>;
}
