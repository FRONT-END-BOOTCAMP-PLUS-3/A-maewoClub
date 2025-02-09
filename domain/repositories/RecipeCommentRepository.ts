import { RecipeCommentCreateDto } from "@/application/recipe-comment/dto/RecipeCommentCreateDto";
import { RecipeCommentUpdateDto } from "@/application/recipe-comment/dto/RecipeCommentUpdateDto";
import { RecipeComment } from "@/domain/entities/RecipeComment";

export interface RecipeCommentRepository {
  count(id: number): number | PromiseLike<number>;

  findAll(
    keyword: number,
    from: number,
    to: number,
    id: number
  ): Promise<RecipeComment[]>;

  findCommentAll(id: number): Promise<RecipeComment[]>;

  addRecipeComment(recipeComment:RecipeCommentCreateDto): Promise<number>;

  getCommentIdByCreatedAt(createdAt: string): Promise<number>;

  updateRecipeComment(recipeComment:
    RecipeCommentUpdateDto
  ): void


  findOne(id: number): Promise<RecipeComment>;

  deleteByCommentId(id: number): Promise<void>;
}
