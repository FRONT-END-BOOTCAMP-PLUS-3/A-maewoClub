import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { RecipeImageRepository } from "@/domain/repositories/recipes/RecipeImageRepository";
import { RecipeIngredientRepository } from "@/domain/repositories/recipes/RecipeIngredientRepository";
import { RecipeRepository } from "@/domain/repositories/recipes/RecipeRepository";
import { RecipeStepRepository } from "@/domain/repositories/recipes/RecipeStepRepository";

export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
    private recipeImageRepository: RecipeImageRepository,
    private recipeIngredientRepository: RecipeIngredientRepository,
    private recipeStepRepository: RecipeStepRepository,
    private recipeCommentRepository: RecipeCommentRepository
  ) {}

  // 1. 디테일 하나 불러오기
  async getRecipeDetail(id: number) {
    return await this.recipeRepository.findOne(id);
  }

  // . 레시피 재료 가져오기
  async getRecipeIngredient(recipeId: number) {
    return await this.recipeIngredientRepository.findAllByRecipeId(recipeId);
  }

  // 2. 레시피 사진 가져오기
  async getRecipeImages(recipeId: number) {
    return await this.recipeImageRepository.findAllByRecipeId(recipeId);
  }

  // 3. 레시피 스탭 가져오기
  async getRecipeSteps(recipeId: number) {
    return await this.recipeStepRepository.findAllByRecipeId(recipeId);
  }

  // 4. 레시피 댓글 가져오기
  // async getRecipeComments(recipeId: number) {
  //   return await this.recipeCommentRepository.findAll(recipeId);
  // }

  // 5. 레시피 user profile 가져오기
  // async getRecipeUserProfile(userId: number) {
  //   return await this.recipeRepository.get(userId);
  // }
}
