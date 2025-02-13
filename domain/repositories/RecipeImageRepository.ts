import { RecipeImage } from "@/domain/entities/RecipeImage";


export interface RecipeImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeImage[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeImage>;
  findRecipeImageByUserId(id: string): Promise<RecipeImage[]>;
  addRecipeImage(recipeId: number, imageUrl: string):void;
  deleteImagesByRecipeId(recipeId: number): void;
}
