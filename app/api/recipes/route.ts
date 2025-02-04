import { RecipeListDto } from "@/application/recipe/dto/RecipeListDto";
import { RecipeImageRepository } from "@/domain/repositories/recipes/RecipeImageRepository";
import { RecipeRepository } from "@/domain/repositories/recipes/RecipeRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository";
import { DfRecipeListUsecase } from "@/application/recipe/DfRecipeListUsecase";
import { NextRequest, NextResponse } from "next/server";

// recipes/route
export async function GET() {
  const recipeRepository: RecipeRepository = new SbRecipeRepository();

  const recipeImageRepository: RecipeImageRepository =
    new SbRecipeImageRepository();
  const recipeImageUsecase: DfRecipeListUsecase = new DfRecipeListUsecase(
    recipeRepository,
    recipeImageRepository
  );
  const recipeListDto: RecipeListDto = await recipeImageUsecase.execute();

  return NextResponse.json(recipeListDto);
}

export async function POST() {
  return NextRequest.toString();
}
