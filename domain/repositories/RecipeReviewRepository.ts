import { RecipeReview } from "../entities/RecipeReview";

export interface RecipeReviewRepository {
  submitReview(review: Omit<RecipeReview, "id" | "createdAt">): Promise<void>;
  uploadImage(image: File): Promise<string>;
}
