import { Recipe } from "@/domain/entities/recipes/Recipe";

export interface RecipeRepository {
  count(): number | PromiseLike<number>;
  findAll(keyword: number, from: number, to: number): Promise<Recipe[]>;
}
