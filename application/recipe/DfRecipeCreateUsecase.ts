import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { SbRecipeIngredientRepository } from "@/infrastructure/repositories/recipes/SbRecipeIngredientRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository";
import { SbRecipeStepRepository } from "@/infrastructure/repositories/recipes/SbRecipeStepRepository";
import { RecipeCreateDto } from "./dto/RecipeCreateDto";
import { RecipeIngredientDto } from "./dto/RecipeIngredientDto";
import { RecipeStepDto } from "./dto/RecipeStepDto";
import { RecipeImageDto } from "./dto/RecipeImageDto";

export class DfRecipeCreateUsecase {
  constructor(
    private recipeRepository: RecipeRepository = new SbRecipeRepository(),
    private recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository(),
    private recipeStepRepository: RecipeStepRepository = new SbRecipeStepRepository(),
    private recipeIngredientRepository: RecipeIngredientRepository = new SbRecipeIngredientRepository()
  ) {}

  async addRecipe(data: RecipeCreateDto): Promise<void> {
    try {
      const recipeId = await this.recipeRepository.addRecipe(data.recipes);

      if (data.ingredients) {
        await Promise.all(
          data.ingredients.map((ingredient: RecipeIngredientDto) =>
            this.recipeIngredientRepository.addIngredient(recipeId, ingredient)
          )
        );
      }

      if (data.steps) {
        await Promise.all(
          data.steps.map((step: RecipeStepDto, index: number) =>
            this.recipeStepRepository.addStep(recipeId, index + 1, step)
          )
        );
      }

      if (data.images) {
        await Promise.all(
          data.images.map((imageDto: RecipeImageDto) =>
            this.recipeImageRepository.addRecipeImage(recipeId, imageDto.photoUrl)
          )
        );
      }

    } catch (error) {
      console.error("레시피 생성 중 오류 발생:", error);
      throw new Error("레시피 생성 실패");
    }
  }
}