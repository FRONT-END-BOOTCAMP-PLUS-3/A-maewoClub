import { RecipeCommentImageRepository } from "@/domain/repositories/recipes/RecipeCommentImageRepository";
import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { RecipeRepository } from "@/domain/repositories/recipes/RecipeRepository";

export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
    private recipeCommentRepository: RecipeCommentRepository,
    private recipeCommentImageRepository: RecipeCommentImageRepository
  ) {}
}
