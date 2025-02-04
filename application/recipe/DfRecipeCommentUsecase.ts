import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { RecipeCommentImageRepository } from "@/domain/repositories/recipes/RecipeCommentImageRepository";

export class DfRecipeCommentUsecase {
  constructor(
    private recipeCommentRepository: RecipeCommentRepository,
    private recipeCommentImageRepository: RecipeCommentImageRepository
  ) {}
}
// const recipeDtos: RecipeDto[] = await Promise.all(
//   menus.map(async (recipe: Recipe) => {
//     const image: RecipeImage | null =
//       await this.recipeImageRepository.findDefaultImageByRecipeId(
//         recipe.id
//       );

//     return {
//       ...recipe,
//       img: image ? image.photoUrl : "default.svg",
//     };
//   })
// );
