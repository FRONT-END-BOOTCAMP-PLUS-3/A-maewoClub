import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";

export class DfRecipeStepUsecase {
  constructor( 
    private recipeStepRepository: RecipeStepRepository
  ){}
  
  async getRecipeSteps(id: number) {
    return await this.recipeStepRepository.findAllByRecipeId(id);
  }
}