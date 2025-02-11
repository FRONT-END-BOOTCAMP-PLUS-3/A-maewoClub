import { DfRecipeDetailUsecase } from "@/application/recipe/DfRecipeDetailUsecase";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET( req: NextRequest ){
  const recipeRepository: RecipeRepository = new SbRecipeRepository();
  const recipeDetailUsecase = new DfRecipeDetailUsecase(
    recipeRepository, 
  );

  try {
    const id = Number(req.nextUrl.searchParams.get("id"));
    if (Number.isNaN(id) || id <= 0) {
      return NextResponse.json({ error: "Valid ID is required" }, { status: 400 });
    }

    const [recipe] = await Promise.all([
      recipeDetailUsecase.getRecipeDetail(id),
    ]);

    if (!recipe) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        data: {
          recipe,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ 레시피 조회 중 에러 발생:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}