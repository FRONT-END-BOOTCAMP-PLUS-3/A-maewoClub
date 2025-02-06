import { RecipeDto } from "./RecipeDto";
import { RecipeStepDto } from "./RecipeStepDto";
import { RecipeIngredientDto } from "./RecipeIngredientDto";
import { RecipeImageDto } from "./RecipeImageDto";

export interface RecipeCreateDto {
  recipes: RecipeDto[],
  ingredients: RecipeIngredientDto[],
  steps: RecipeStepDto[],
  images: RecipeImageDto[],
}