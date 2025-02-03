import { RecipeReview } from "../entities/RecipeReview";

export interface RecipeReviewRepository {
  submitReview(
    review: Omit<RecipeReview, "id" | "created_at" | "updated_at">
  ): Promise<void>;
  uploadImage(image: File): Promise<string>;
}
