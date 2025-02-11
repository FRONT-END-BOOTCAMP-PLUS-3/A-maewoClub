import { RecipeRepository } from "@/domain/repositories/RecipeRepository";


export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
  ) {}

  async getRecipeDetail(id: number) {
    return await this.recipeRepository.findOne(id);
  }
}
