import { RecipeComment } from "@/domain/entities/recipes/RecipeComment";

export interface RecipeCommentRepository {
  count(): number | PromiseLike<number>;
  findAll(keyword: number, from: number, to: number): Promise<RecipeComment[]>;
}
