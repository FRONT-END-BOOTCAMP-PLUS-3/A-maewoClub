import { DfRecipeTagUsecase } from "@/application/recipe-tag/DfRecipeTagUsecase";
import { RecipeTag } from "@/domain/entities/RecipeTag";
import { RecipeTagRepository } from "@/domain/repositories/RecipeTagRepository";
import { SbRecipeTagRepository } from "@/infrastructure/repositories/recipes/SbRecipeTagRepository";
import { NextResponse } from "next/server";

// recipe-tags
export async function GET() {
  const recipeTagRepository: RecipeTagRepository = new SbRecipeTagRepository();
  const recipeTagUsecase = new DfRecipeTagUsecase(recipeTagRepository)
  const recipeTag: RecipeTag[] = await recipeTagUsecase.findAll();
  
  return NextResponse.json(recipeTag);
}