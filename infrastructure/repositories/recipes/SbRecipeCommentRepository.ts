import { RecipeComment } from "@/domain/entities/recipes/RecipeComment";
import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeCommentRepository implements RecipeCommentRepository {
  async count(recipeId: number): Promise<number> {
    const supabase = await createClient();
    const { count, error } = await supabase
      .from("recipe_comment")
      .select("*", { count: "exact", head: true })
      .eq("recipe_id", recipeId);

    if (error) {
      throw new Error(error.message);
    }

    return count || 0;
  }
  async findOne(id: number): Promise<RecipeComment> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return {
      id: data.id,
      recipeId: data.recipe_id,
      userId: data.user_id,
      title: data.title,
      content: data.content,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      score: data.score,
    };
  }
  async findAll(
    keyword: number,
    from: number,
    to: number,
    recipeId: number
  ): Promise<RecipeComment[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment")
      .select("*")
      .eq("recipe_id", recipeId)
      .ilike("title", `%${keyword}%`)
      .order("created_at", { ascending: false })
      .range(from, to);
    // order ("score",{ ascending: false});

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
          score: recipeComment.score,
        };
      }
    );
    return RecipeComment || [];
  }

  async addRecipeComment(recipeComment: RecipeComment): Promise<RecipeComment> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("recipe_comment")
      .insert([recipeComment])
      .select("id")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data.id;
  }

  async updateRecipeComment(recipeComment: {
    id: number;
    recipeId: number;
    content: string;
    updatedAt: Date;
    score: number;
  }): Promise<number> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_comment")
      .update(recipeComment)
      .eq("id", recipeComment.id);

    if (error) {
      throw new Error(error.message);
    }
    return recipeComment.id;
  }

  async deleteByCommentId(id: number): Promise<void> {
    const supabase = await createClient();
    const { error } = await supabase
      .from("recipe_comment")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  }
}
