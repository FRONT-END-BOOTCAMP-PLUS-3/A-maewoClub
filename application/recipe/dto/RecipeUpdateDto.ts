import { RecipeStep } from "@/domain/entities/RecipeStep";
import { RecipeIngredientDto } from "./RecipeIngredientDto";

export interface RecipeUpdateDto {
  recipeId: number;
  title: string;
  description: string;
  userId: string;
  ingredients?: RecipeIngredientDto[];
  steps?: RecipeStep[];
  images?: string[];
  replaceData?: boolean;
}