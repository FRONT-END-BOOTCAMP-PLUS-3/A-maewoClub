import { RecipeImageDto } from "./RecipeImageDto";
import { RecipeIngredientDto } from "./RecipeIngredientDto";
import { RecipeStepDto } from "./RecipeStepDto";

export interface RecipeCreateDto {
  title: string;
  description: string;
  userId: string;
  ingredients?: RecipeIngredientDto[];
  steps?: RecipeStepDto[];
  images?: RecipeImageDto[];
}