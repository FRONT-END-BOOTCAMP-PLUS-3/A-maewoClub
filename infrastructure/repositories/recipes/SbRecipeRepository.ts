import { RecipeCreateDto } from "@/application/recipe/dto/RecipeCreateDto";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeUpdateDto } from "@/application/recipe/dto/RecipeUpdateDto";
import { Recipe } from "@/domain/entities/Recipe";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeRepository implements RecipeRepository{
  async findAllRecipes(): Promise<RecipeDto[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
    .from("recipe")
    .select("*")

    if (error) {
      console.error("Error fetching menus:", error.message);
      throw new Error("Failed to fetch menus");
    }
    const recipes: Recipe[] = data.map((recipe): Recipe => {
      return {
        id: recipe.id,
        userId: recipe.user_id,
        title: recipe.title,
        description: recipe.description,
        tagId: recipe.tag_id,
        createdAt: recipe.created_at,
        updatedAt: recipe.updated_at,
        likeCount: recipe.like_count,
      };
    });
    return recipes || [];
  }

  async findRecipeByUserId(id: string):Promise<Recipe[]>{
    const supabase = await createClient();
    const {data, error} = await supabase
    .from("recipe")
    .select("*")
    .eq("user_id", id)

    if (error) {
      console.error("Error fetching menus:", error.message);
      throw new Error("Failed to fetch menus");
    }
    const recipes: Recipe[] = data.map((recipe): Recipe => {
      return {
        id: recipe.id,
        userId: recipe.user_id,
        title: recipe.title,
        description: recipe.description,
        tagId: recipe.tag_id,
        createdAt: recipe.created_at,
        updatedAt: recipe.updated_at,
        likeCount: recipe.like_count,
      };
    });
    return recipes || [];
  }

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
        description: recipe.description,
        tagId: recipe.tag_id,
        createdAt: recipe.created_at,
        updatedAt: recipe.updated_at,
        likeCount: recipe.like_count,
      };
    });
    return recipes || [];
  }

  async addRecipe(recipe: RecipeCreateDto): Promise<number> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe")
      .insert([recipe])
      .select("id")
      .single();

    if (error) {
      throw new Error(error.message);
    }
    console.log("recipe data의 id 입니다 :", data.id);

    return data.id || 0;
  }

  async updateRecipe(recipe: RecipeUpdateDto): Promise<number> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe")
      .update([recipe])
      .eq("id", recipe.recipeId)
      .select();
  
    if (error) {
      console.error("Recipe 업데이트 중 오류 발생:", error);
      throw new Error(error.message);
    }
  
    console.log("✅ Recipe 업데이트 성공:", data);
  
    return data?.length || 0;
  }
  async deleteRecipe(recipeId: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase.from("recipe").delete().eq("id", recipeId);

    if (error) {
      throw new Error(error.message);
    }
    console.log("recipe delete 의 error 입니다 :", error);
  }
}
