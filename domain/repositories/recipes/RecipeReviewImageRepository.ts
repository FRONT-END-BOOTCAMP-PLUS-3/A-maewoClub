import { RecipeReviewImage } from "@/domain/entities/recipes/RecipeReviewImage";


export interface RecipeReviewImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeReviewImage[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeReviewImage>;
}
