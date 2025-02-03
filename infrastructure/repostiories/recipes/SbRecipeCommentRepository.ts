import { RecipeComment } from "@/domain/entities/recipes/RecipeComment";
import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeCommentRepository implements RecipeCommentRepository {
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
  ): Promise<RecipeComment[]> {
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

    const RecipeComment: RecipeComment[] = data.map(
      (recipeComment): RecipeComment => {
        return {
          id: recipeComment.id,
          recipeId: recipeComment.recipe_id,
          userId: recipeComment.user_id,
          title: recipeComment.title,
          content: recipeComment.content,
          createdAt: recipeComment.created_at,
          updatedAt: recipeComment.updated_at,
        };
      }
    );
    return RecipeComment || [];
  }
}
