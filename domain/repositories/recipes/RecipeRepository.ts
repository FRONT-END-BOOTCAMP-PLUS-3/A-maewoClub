import { Recipe } from "@/domain/entities/recipes/Recipe";

export interface RecipeRepository {
  get(): Promise<Recipe[]>
  count(): number | PromiseLike<number>;
  findOne(id: number): Promise<Recipe | null>;
  findAll(keyword: number, from: number, to: number): Promise<Recipe[]>;
}
