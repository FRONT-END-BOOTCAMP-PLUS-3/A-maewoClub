import { RecipeComment } from "@/domain/entities/recipes/RecipeComment";

export interface RecipeCommentRepository {
  count(id: number): number | PromiseLike<number>;
  findAll(keyword: number, from: number, to: number, id: number): Promise<RecipeComment[]>;
}
