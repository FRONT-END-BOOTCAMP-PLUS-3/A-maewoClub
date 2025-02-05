import { RecipeTag } from "@/domain/entities/RecipeTag";
import { RecipeTagRepository } from "@/domain/repositories/RecipeTagRepository";
import { createClient } from "@/utils/supabase/server";

export class SbRecipeTagRepository implements RecipeTagRepository {
  //TODO: api 요청 에러 res.json 부분 에러임. -> 고치자.
  async findAll(): Promise<RecipeTag[]> {
   const supabase = await createClient();  
   const { data, error } = await supabase
    .from('recipe_tag')
    .select('*')

   if (error) {
    console.error(error);
   }

    return data || [];
  }
}