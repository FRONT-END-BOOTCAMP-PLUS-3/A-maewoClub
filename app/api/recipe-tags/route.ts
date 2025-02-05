import { RecipeTag } from "@/domain/entities/recipes/RecipeTag";
import { RecipeTagRepository } from "@/domain/repositories/recipes/RecipeTagRepository";
import { SbRecipeTagRepository } from "@/infrastructure/repositories/recipes/SbRecipeTagRepository";
import { NextResponse } from "next/server";

// recipe-tags
export async function GET() {
  const recipeTagRepository: RecipeTagRepository = new SbRecipeTagRepository();
  const recipeTag: RecipeTag[] = await recipeTagRepository.findAll();
  
  return NextResponse.json(recipeTag)
}