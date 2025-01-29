import { RecipeImage } from "../entities/RecipeImage";

export interface RecipeImageRepository {
    findAllByRecipeId(recipeId: number): Promise<RecipeImage[]>;
    findDefaultImageByRecipeId(recipeId: number): Promise<RecipeImage>;
}