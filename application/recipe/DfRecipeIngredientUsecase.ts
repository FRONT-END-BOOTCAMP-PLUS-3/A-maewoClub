import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";

export class DfRecipeIngredientUsecase {
  constructor(
    private recipeIngredientRepository: RecipeIngredientRepository,
  ){}
  
  async getRecipeIngredient(recipeId: number) {
    return await this.recipeIngredientRepository.findAllByRecipeId(recipeId);
  }

}