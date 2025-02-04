import { RecipeImage } from "@/domain/entities/recipes/RecipeImage";


export interface RecipeImageRepository {
  findAllByRecipeId(recipeId: number): Promise<RecipeImage[]>;
  findDefaultImageByRecipeId(recipeId: number): Promise<RecipeImage>;
  addRecipeImage(recipeId: number, imageUrl: string):void;
}
