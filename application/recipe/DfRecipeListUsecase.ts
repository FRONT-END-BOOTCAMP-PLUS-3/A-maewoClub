import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeListDto } from "./dto/RecipeListDto";
import { Recipe } from "@/domain/entities/recipes/Recipe";
import { RecipeDto } from "./dto/RecipeDto";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { RecipeImage } from "@/domain/entities/recipes/RecipeImage";

export class DfMenuListUsecase {
  constructor(
    private repository: RecipeRepository,
    private recipeImageRepository: RecipeImageRepository
  ) {}

  // execute();
  async execute(id: number = 1, page: number = 1): Promise<RecipeListDto> {
    const from = (page - 1) * 8;
    const to = page * 8 - 1;

    const menus: Recipe[] = await this.repository.findAll(id, from, to);

    const recipeDtos: RecipeDto[] = await Promise.all(
      menus.map(async (recipe: Recipe) => {
        const image: RecipeImage | null =
          await this.recipeImageRepository.findDefaultImageByRecipeId(
            recipe.id
          );

        return {
          ...recipe,
          img: image ? image.photoUrl : "default.svg",
        };
      })
    );

    const totalCount: number = await this.repository.count();

    return {
      recipes: recipeDtos,
      totalCount,
      totalPages: Math.ceil(totalCount / 8),
      hasPreviousPage: page > 1,
      hasNextPage: page < Math.ceil(totalCount / 8),
      pages: Array.from({ length: Math.ceil(totalCount / 8) }, (_, i) => i + 1),
    };
  }
}
