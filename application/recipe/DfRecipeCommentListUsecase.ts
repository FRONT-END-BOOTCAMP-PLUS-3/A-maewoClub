// 댓글, 댓글 이미지, 페이지네이션 처리 
import { RecipeCommentImageRepository } from "@/domain/repositories/recipes/RecipeCommentImageRepository";
import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";

export class DfRecipeCommentListUsecase {
  constructor(
    private recipeCommentRepository: RecipeCommentRepository,
    private recipeCommentImageRepository: RecipeCommentImageRepository,
  ) {}
  

}
