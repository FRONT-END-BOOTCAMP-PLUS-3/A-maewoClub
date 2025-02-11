import { DfRecipeStepUsecase } from "@/application/recipe/DfRecipeStepUsecase";
import { RecipeStepDto } from "@/application/recipe/dto/RecipeStepDto";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";
import { SbRecipeStepRepository } from "@/infrastructure/repositories/recipes/SbRecipeStepRepository";
import { NextRequest, NextResponse } from "next/server";

// recipe-steps
export async function GET(req: NextRequest) {
  try {
    const id = Number(req.nextUrl.searchParams.get("id"));
    if (Number.isNaN(id) || id <= 0) {
      return NextResponse.json({ error: "Valid ID is required" }, { status: 400 });
    }

    const recipeStepRepository: RecipeStepRepository = new SbRecipeStepRepository();
    const recipeStepUsecase = new DfRecipeStepUsecase(recipeStepRepository);
    
    const recipeStepDto: RecipeStepDto[] = await recipeStepUsecase.getRecipeSteps(id);
    
    const steps = recipeStepDto
      .filter(step => step.recipeId === id)
      .sort((a, b) => a.order - b.order);

    return NextResponse.json(steps, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipe steps:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}