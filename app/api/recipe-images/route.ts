import { DfRecipeImageUsecase } from "@/application/recipe/DfRecipeImageUsecase";
import { RecipeImageDto } from "@/application/recipe/dto/RecipeImageDto";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { NextRequest, NextResponse } from "next/server";

// recipe-images
export async function GET(req: NextRequest) {
  try {
    const id = Number(req.nextUrl.searchParams.get("id"));
    if (Number.isNaN(id) || id <= 0) {
      return NextResponse.json({ error: "Valid ID is required" }, { status: 400 });
    }

    const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository();
    const recipeImageUsecase = new DfRecipeImageUsecase(recipeImageRepository);
    
    const recipeImageDto: RecipeImageDto[] = await recipeImageUsecase.getRecipeImages(id);
    
    return NextResponse.json(recipeImageDto, { status: 200 });

  } catch (error) {

    console.error("Error fetching recipe images:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}