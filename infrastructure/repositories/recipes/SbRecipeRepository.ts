import { Recipe } from "@/domain/entities/recipes/Recipe";
import { RecipeRepository } from "@/domain/repositories/recipes/RecipeRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeRepository implements RecipeRepository {
  async findOne(id: number): Promise<Recipe> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe")
      .select("*")
      .eq("id", id)
      .maybeSingle();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data ?? null;
  }

  get(): Promise<Recipe[]> {
    throw new Error("Method not implemented.");
  }
  
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
        tagId: recipe.tag_id,
        createdAt: recipe.created_at,
        updatedAt: recipe.updated_at,
        likeCount: recipe.like_count,
      };
    });
    return recipes || [];
  }

  async addRecipe(recipe: { title: string; description: string; userId: string }): Promise<number> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe")
      .insert([recipe])
      .select("id")
      .single();
  
    if (error) {
      throw new Error(error.message);
    }
  
    return data.id; // 생성된 레시피 ID 반환
  }

}
