import { RecipeCommentCreateDto } from "@/application/recipe-comment/dto/RecipeCommentCreateDto";
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

  updateRecipeComment(recipeComment: {
    id: number;
    recipeId: number;
    content: string;
    updatedAt: Date;
    score: number;
  }): Promise<number>;

  findOne(id: number): Promise<RecipeComment>;

  deleteByCommentId(id: number): Promise<void>;
}
