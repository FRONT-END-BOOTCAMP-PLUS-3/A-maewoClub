import { RecipeImageRepository } from "@/domain/repositories/recipes/RecipeImageRepository";
import { RecipeRepository } from "@/domain/repositories/recipes/RecipeRepository";

export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
    private recipeImageRepository: RecipeImageRepository,
  ) {}

  
}
