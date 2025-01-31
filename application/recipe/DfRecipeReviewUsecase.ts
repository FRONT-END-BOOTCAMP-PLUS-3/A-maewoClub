import { RecipeReview } from "@/domain/entities/RecipeReview";
import { RecipeReviewRepository } from "@/domain/repositories/RecipeReviewRepository";

export class SubmitReviewUseCase {
  constructor(private reviewRepository: RecipeReviewRepository) {}

  async execute(
    reviewDescription: string,
    point: number,
    image: File | null,
    userId: number,
    recipeId: number
  ): Promise<void> {
    let recipeReviewImg = "";

    if (image) {
      recipeReviewImg = await this.reviewRepository.uploadImage(image);
    }

    const newReview: Omit<RecipeReview, "id" | "createdAt"> = {
      userId,
      point,
      reviewDescription,
      recipeReviewImg,
    };

    await this.reviewRepository.submitReview(newReview);
  }
}
