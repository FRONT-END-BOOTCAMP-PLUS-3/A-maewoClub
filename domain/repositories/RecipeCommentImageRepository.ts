import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";
import { RecipeCommentImageUpdateDto } from "@/application/recipe-comment/dto/RecipeCommentImageUpdate";
import { RecipeCommentImage } from "@/domain/entities/RecipeCommentImage";

export interface RecipeCommentImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeCommentImage[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeCommentImage>;
  addRecipeCommentImage(
    recipeCommentImage: RecipeCommentImageDto
  ): void;
  updateRecipeCommentImage(
    recipeCommentImage: RecipeCommentImageUpdateDto
  ): void;
  deleteByImageId(id: number): Promise<void>;
  findOne(id: number): Promise<RecipeCommentImage>;
}
