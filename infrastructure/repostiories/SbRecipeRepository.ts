import { Recipe } from "@/domain/entities/Recipe";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeRepository implements RecipeRepository {
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

  async findAll(keyword: number, from: number, to: number): Promise<Recipe[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe")
      .select("*")
      .ilike("title", `%${keyword}%`)
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error fetching menus:", error.message);
      throw new Error("Failed to fetch menus");
    }

    const recipes: Recipe[] = data.map((recipe): Recipe => {
      return {
        id: recipe.id,
        userId: recipe.user_id,
        title: recipe.title,
        instruction: recipe.instruction,
        tagId: recipe.tag_id,
        createdAt: recipe.created_at,
        updatedAt: recipe.updated_at,
        likeCount: recipe.like_count,
      };
    });
    return recipes || [];
  }
}
