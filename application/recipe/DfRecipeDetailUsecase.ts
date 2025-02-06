import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";

export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
    private recipeImageRepository: RecipeImageRepository,
    private recipeIngredientRepository: RecipeIngredientRepository,
    private recipeStepRepository: RecipeStepRepository
  ) {}

  /*
  get -> get 으로 명명
  post -> set 으로 명명
  update -> update 로 명명 
  delete -> delete 로 명명
  */

  async getRecipeDetail(id: number) {
    return await this.recipeRepository.findOne(id);
  }

  async getRecipeIngredient(recipeId: number) {
    return await this.recipeIngredientRepository.findAllByRecipeId(recipeId);
  }

  async getRecipeImages(recipeId: number) {
    return await this.recipeImageRepository.findAllByRecipeId(recipeId);
  }

  async getRecipeSteps(recipeId: number) {
    return await this.recipeStepRepository.findAllByRecipeId(recipeId);
  }
}
