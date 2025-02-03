import { RecipeReview } from "../entities/RecipeReview";

export interface RecipeReviewRepository {
  count(): number | PromiseLike<number>;
  findAll(keyword: number, from: number, to: number): Promise<RecipeReview[]>;
}
