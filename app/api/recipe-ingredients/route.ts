import { DfRecipeIngredientUsecase } from "@/application/recipe/DfRecipeIngredientUsecase";
import { RecipeIngredientDto } from "@/application/recipe/dto/RecipeIngredientDto";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { SbRecipeIngredientRepository } from "@/infrastructure/repositories/recipes/SbRecipeIngredientRepository";
import { NextRequest, NextResponse } from "next/server";

// recipe-ingredients
export async function GET(req: NextRequest) {
  try {
    const id = Number(req.nextUrl.searchParams.get("id"));
    if (Number.isNaN(id) || id <= 0) {
      return NextResponse.json({ error: "Valid ID is required" }, { status: 400 });
    }

    const recipeIngredientRepository: RecipeIngredientRepository = new SbRecipeIngredientRepository();
    const recipeIngredientUsecase = new DfRecipeIngredientUsecase(recipeIngredientRepository);
    
    const recipeIngredientDto: RecipeIngredientDto[] = await recipeIngredientUsecase.getRecipeIngredient(id);
    
    return NextResponse.json(recipeIngredientDto, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipe ingredients:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}