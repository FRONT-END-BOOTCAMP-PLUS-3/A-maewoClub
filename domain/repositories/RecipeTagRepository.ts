import { RecipeTag } from "@/domain/entities/RecipeTag";

export interface RecipeTagRepository {
  findAll(): Promise<RecipeTag[]>;
}