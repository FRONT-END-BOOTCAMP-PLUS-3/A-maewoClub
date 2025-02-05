import { RecipeCommentImage } from "@/domain/entities/RecipeCommentImage";

export interface RecipeCommentImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeCommentImage[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeCommentImage>;
  addRecipeCommentImage(
    recipeCommentId: number,
    imageUrl: string
  ): Promise<void>;
  deleteByImageId(id: number): Promise<void>;
}
