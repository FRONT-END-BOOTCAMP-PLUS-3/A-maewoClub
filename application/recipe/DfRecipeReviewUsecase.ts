import { RecipeReview } from "@/domain/entities/RecipeReview";
import { RecipeReviewRepository } from "@/domain/repositories/RecipeReviewRepository";

export class SubmitReviewUseCase {
  constructor(private reviewRepository: RecipeReviewRepository) {}

  async execute(
    title: string,
    content: string,
    image: File | null,
    user_id: number,
    recipe_id: number
  ): Promise<void> {
    let recipeReviewImg = "";

    if (image) {
      recipeReviewImg = await this.reviewRepository.uploadImage(image);
    }

    const newReview: Omit<RecipeReview, "id" | "created_at" | "updated_at"> = {
      recipe_id,
      user_id,
      title,
      content,
      recipeReviewImg,
    };

    await this.reviewRepository.submitReview(newReview);
  }
}
