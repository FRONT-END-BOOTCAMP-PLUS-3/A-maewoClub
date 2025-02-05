import { Recipe } from "@/domain/entities/recipes/Recipe";

export interface RecipeRepository {
  get(): Promise<Recipe[]>
  count(): number | PromiseLike<number>;
  findOne(id: number): Promise<Recipe>;
  findAll(keyword: number, from: number, to: number): Promise<Recipe[]>;
  addRecipe(recipe: { title: string; description: string; userId: string }): Promise<number>
}
