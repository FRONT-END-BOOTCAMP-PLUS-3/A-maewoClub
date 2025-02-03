import { createClient } from "@/utils/supabase/server";
import { RecipeReview } from "@/domain/entities/RecipeReview";
import { RecipeReviewRepository } from "@/domain/repositories/RecipeReviewRepository";

export class SbRecipeRepository implements RecipeReviewRepository {
  async submitReview(
    review: Omit<RecipeReview, "id" | "created_at" | "updated_at">
  ): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase.from("recipe_reviews").insert(review);

    if (error) {
      throw new Error(error.message);
    }
  }

  async uploadImage(image: File): Promise<string> {
    const supabase = await createClient();
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`public/${image.name}`, image);

    if (error) {
      throw new Error(error.message);
    }

    return data?.path;
  }
}
