import { RecipeImageDto } from "@/application/recipe/dto/RecipeImageDto";
import { RecipeImage } from "../entities/RecipeImage";


export interface RecipeImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeImageDto[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeImage>;
  findImagesByRecipeId(recipeId: number):Promise<RecipeImageDto[]>
  addRecipeImage(recipeId: number, imageUrl: string):void;
  deleteImagesByRecipeId(recipeId: number): void;
}
