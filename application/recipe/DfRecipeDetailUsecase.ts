import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeReviewImageRepository } from "@/domain/repositories/RecipeReviewImageRepository";
import { RecipeReviewRepository } from "@/domain/repositories/RecipeReviewRepository";

export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
    private recipeReviewRepository: RecipeReviewRepository,
    private recipeReviewImageRepository: RecipeReviewImageRepository
  ) {}

  
}