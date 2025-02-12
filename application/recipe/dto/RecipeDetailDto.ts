import { RecipeDto } from "./RecipeDto";
import { RecipeImageDto } from "./RecipeImageDto";

export interface RecipeDetailDto {
  recipes: RecipeDto,
  images: RecipeImageDto[]; 
}