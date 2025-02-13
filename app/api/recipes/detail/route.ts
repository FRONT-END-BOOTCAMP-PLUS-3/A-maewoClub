
import { DfRecipeDetailUsecase } from "@/application/recipe/DfRecipeDetailUsecase";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("🔍 Incoming request:", req.nextUrl.toString());
  
  const idParam = req.nextUrl.searchParams.get("id");
  console.log("🛠️ Extracted ID param:", idParam);

  const id = idParam ? Number(idParam) : null;
  console.log("🔢 Converted ID:", id);

  if (!id || Number.isNaN(id) || id <= 0) {
    return NextResponse.json({ error: "Valid ID is required" }, { status: 400 });
  }

  try {
    const recipeRepository: RecipeRepository = new SbRecipeRepository();
    const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository();
    const recipeDetailUsecase = new DfRecipeDetailUsecase(recipeRepository, recipeImageRepository);

    const recipe = await recipeDetailUsecase.getRecipeDetail(id);
    
    if (!recipe) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    return NextResponse.json({ data: recipe }, { status: 200 });
  } catch (error) {
    console.error("❌ 레시피 조회 중 에러 발생:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}