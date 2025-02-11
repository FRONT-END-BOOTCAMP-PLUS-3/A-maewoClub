import { DfRecipeDetailUsecase } from "@/application/recipe/DfRecipeDetailUsecase";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { SbRecipeIngredientRepository } from "@/infrastructure/repositories/recipes/SbRecipeIngredientRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository";
import { SbRecipeStepRepository } from "@/infrastructure/repositories/recipes/SbRecipeStepRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const recipeRepository: RecipeRepository = new SbRecipeRepository();
  const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository();
  const recipeIngredientRepository: RecipeIngredientRepository = new SbRecipeIngredientRepository();
  const recipeStepRepository: RecipeStepRepository = new SbRecipeStepRepository();
  
  const recipeDetailUsecase = new DfRecipeDetailUsecase(
    recipeRepository, 
    recipeImageRepository, 
    recipeIngredientRepository, 
    recipeStepRepository
  );

  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid recipe ID" }, { status: 400 });
    }

    const [recipe, images, ingredients, steps] = await Promise.all([
      recipeDetailUsecase.getRecipeDetail(id),
      recipeDetailUsecase.getRecipeImages(id),
      recipeDetailUsecase.getRecipeIngredient(id),
      recipeDetailUsecase.getRecipeSteps(id),
    ]);

    if (!recipe) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        data: {
          recipe,
          images,
          ingredients,
          steps,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ 레시피 조회 중 에러 발생:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}