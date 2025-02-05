import { DfRecipeDetailUsecase } from "@/application/recipe/DfRecipeDetailUsecase";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeIngredientCreateDto } from "@/application/recipe/dto/RecipeIngredientDto";
import { RecipeCommentRepository } from "@/domain/repositories/RecipeCommentRepository";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";
import { SbRecipeCommentRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { SbRecipeIngredientRepository } from "@/infrastructure/repositories/recipes/SbRecipeIngredientRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository"
import { SbRecipeStepRepository } from "@/infrastructure/repositories/recipes/SbRecipeStepRepository";
import { NextRequest, NextResponse } from "next/server";

// recipes/route/[id]
export async function GET(id: number){
  const recipeRepository:RecipeRepository = new SbRecipeRepository();
  const recipeIngredientRepository: RecipeIngredientRepository = new SbRecipeIngredientRepository();
  const recipeStepRepository:RecipeStepRepository = new SbRecipeStepRepository();
  const recipeCommentRepository: RecipeCommentRepository = new SbRecipeCommentRepository;
  const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository; 

  const recipeDetailUsecase = new DfRecipeDetailUsecase(recipeRepository, recipeImageRepository, recipeIngredientRepository, recipeStepRepository, recipeCommentRepository);

  const recipeDetailDto: RecipeDto =  await recipeDetailUsecase.getRecipeDetail(id);

  return NextResponse.json(recipeDetailDto);
}


export async function POST(req: NextRequest){
  try {
    const body = await req.json();
    // 필수 데이터 체크
    if (!body.title || !body.description || !body.userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Repository 인스턴스 생성
    const recipeRepository: RecipeRepository = new SbRecipeRepository();
    const recipeIngredientRepository: RecipeIngredientRepository = new SbRecipeIngredientRepository();
    const recipeStepRepository: RecipeStepRepository = new SbRecipeStepRepository();
    const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository();

    // Usecase 인스턴스 생성
    const recipeDetailUsecase = new DfRecipeDetailUsecase(
      recipeRepository,
      recipeImageRepository,
      recipeIngredientRepository,
      recipeStepRepository,
      new SbRecipeCommentRepository()
    );

    // 1️⃣ 레시피 저장
    const createRecipeId = await recipeRepository.addRecipe({
      title: body.title,
      description: body.description,
      userId: body.userId,
    });

    // 2️⃣ 재료 저장 (배열 데이터 처리)
    if (body.ingredients?.length) {
      await Promise.all(
        body.ingredients.map((ingredient: RecipeIngredientCreateDto) =>
          recipeIngredientRepository.addIngredient(createRecipeId, ingredient)
        )
      );
    }

    // 3️⃣ 조리 과정 저장
    if (body.steps?.length) {
      await Promise.all(
        body.steps.map((step: string, index: number) =>
          recipeStepRepository.addStep(createRecipeId, index + 1, step)
        )
      );
    }

    // 4️⃣ 이미지 저장
    if (body.images?.length) {
      await Promise.all(
        body.images.map((photoUrl: string) =>
          recipeImageRepository.addRecipeImage(createRecipeId, photoUrl)
        )
      );
    }

    // 5️⃣ 저장된 레시피 반환
    const createRecipe = await recipeDetailUsecase.getRecipeDetail(createRecipeId);

    return NextResponse.json(createRecipe, { status: 200 });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}