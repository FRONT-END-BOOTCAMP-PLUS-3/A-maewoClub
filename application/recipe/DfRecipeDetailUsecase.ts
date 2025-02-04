import { RecipeImageRepository } from "@/domain/repositories/recipes/RecipeImageRepository";
import { RecipeRepository } from "@/domain/repositories/recipes/RecipeRepository";

export class DfRecipeDetailUsecase {
  constructor(
    private recipeRepository: RecipeRepository,
    private recipeImageRepository: RecipeImageRepository,
  ) {}

  // DfRecipeDetailUsecase 에 필요한 구현사항
  // 1. 디테일 하나 불러오고
  // 2. 레시피 사진 가져오기
  // 3. 레시피 스탭 가져오기
  // 4. 레시피 댓글 가져오기
  // 5. 레시피 user profile 가져와야함. 

}
