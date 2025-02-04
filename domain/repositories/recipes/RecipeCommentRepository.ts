import { RecipeComment } from "@/domain/entities/recipes/RecipeComment";

export interface RecipeCommentRepository {
  count(id: number): number | PromiseLike<number>;
  findAll(
    keyword: number,
    from: number,
    to: number,
    id: number
  ): Promise<RecipeComment[]>;

  addRecipeComment(recipeComment: {
    id: number;
    recipeId: number;
    content: string;
    createdAt: Date;
    score: number;
  }): Promise<number>;

  findOne(id: number): Promise<RecipeComment>;
  deleteByCommentId(id: number): Promise<void>;
}
