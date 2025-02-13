import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";

export class DfRecipeImageUsecase {
  constructor(
    private recipeImageRepository: RecipeImageRepository
  ){}

  async getRecipeImages(recipeId: number) {
    return await this.recipeImageRepository.findAllByRecipeId(recipeId);
  }   
}