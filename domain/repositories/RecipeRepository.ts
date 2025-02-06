import { Recipe } from "@/domain/entities/Recipe";

export interface RecipeRepository {
  count(): number | PromiseLike<number>;
  findOne(id: number): Promise<Recipe>;
  findAll(keyword: number, from: number, to: number): Promise<Recipe[]>;
  addRecipe(recipe: Recipe[]): Promise<number>;
  deleteRecipe(recipeId: number): void;
  updateRecipe(recipeId:number, { title, description, userId }: Recipe):Promise<number>;
}
