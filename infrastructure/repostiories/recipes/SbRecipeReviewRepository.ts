import { RecipeReview } from "@/domain/entities/RecipeReview";
import { RecipeReviewRepository } from "@/domain/repositories/RecipeReviewRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeReviewRepository implements RecipeReviewRepository {
  async count(): Promise<number> {
    const supabase = await createClient();
    const { count, error } = await supabase
      .from("recipe")
      .select("*", { count: "exact", head: true });

    if (error) {
      throw new Error(error.message);
    }

    return count || 0;
  }

  async findAll(
    keyword: number,
    from: number,
    to: number
  ): Promise<RecipeReview[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment")
      .select("*")
      .ilike("title", `%${keyword}%`)
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error fetching menus:", error.message);
      throw new Error("Failed to fetch menus");
    }

    const RecipeReview: RecipeReview[] = data.map(
      (recipeReview): RecipeReview => {
        return {
          id: recipeReview.id,
          recipeId: recipeReview.recipe_id,
          userId: recipeReview.user_id,
          title: recipeReview.title,
          content: recipeReview.content,
          createdAt: recipeReview.created_at,
          updatedAt: recipeReview.updated_at,
        };
      }
    );
    return RecipeReview || [];
  }
}
