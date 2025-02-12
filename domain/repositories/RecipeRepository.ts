import { RecipeCreateDto } from "@/application/recipe/dto/RecipeCreateDto";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeUpdateDto } from "@/application/recipe/dto/RecipeUpdateDto";
import { Recipe } from "@/domain/entities/Recipe";

export interface RecipeRepository {
  count(): number | PromiseLike<number>;
  findOne(id: number): Promise<Recipe>;
  findAll(keyword: number, from: number, to: number): Promise<Recipe[]>;
  findAllRecipes(): Promise<RecipeDto[]>;
  findRecipeByUserId(id: string): Promise<Recipe[]>;
  addRecipe(recipeId: RecipeCreateDto): Promise<number>;
  deleteRecipe(recipeId: number): void;
  updateRecipe(recipe: RecipeUpdateDto):Promise<number>;
}
