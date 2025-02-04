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

// 댓글 이미지랑 붙여서 보이기
// comment 에 comment image 를 붙이는 작업 필요함.
// 어떤 user 인지 붙여야 함.
//
