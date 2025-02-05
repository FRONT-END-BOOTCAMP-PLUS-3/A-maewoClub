import { RecipeTag } from "@/domain/entities/recipes/RecipeTag";

export interface RecipeTagRepository {
  findAll(): Promise<RecipeTag[]>;
}