import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository"; 
import { RecipeImageDto } from "./dto/RecipeImageDto";
import { RecipeDetailDto } from "./dto/RecipeDetailDto";

export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
    private recipeImageRepository: RecipeImageRepository 
  ) {}

  async getRecipeDetail(id: number): Promise<RecipeDetailDto | null> {
    const recipe = await this.recipeRepository.findOne(id);
    if (!recipe) return null;

    const allImages: RecipeImageDto[] = 
    await this.recipeImageRepository.findImagesByRecipeId(id);


    return {
      recipes: recipe,
      images: allImages.map(img => ({
        id: img.id,
        recipeId: recipe.id,
        photoUrl: img.photoUrl,
      }))
    };
  }
}