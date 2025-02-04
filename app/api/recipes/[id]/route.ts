import { DfRecipeDetailUsecase } from "@/application/recipe/DfRecipeDetailUsecase";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeIngredientCreateDto } from "@/application/recipe/dto/RecipeIngredientDto";
import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { RecipeImageRepository } from "@/domain/repositories/recipes/RecipeImageRepository";
import { RecipeIngredientRepository } from "@/domain/repositories/recipes/RecipeIngredientRepository";
import { RecipeRepository } from "@/domain/repositories/recipes/RecipeRepository";
import { RecipeStepRepository } from "@/domain/repositories/recipes/RecipeStepRepository";
import { SbRecipeCommentRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { SbRecipeIngredientRepository } from "@/infrastructure/repositories/recipes/SbRecipeIngredientRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository"
import { SbRecipeStepRepository } from "@/infrastructure/repositories/recipes/SbRecipeStepRepository";
import { NextRequest, NextResponse } from "next/server";

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
    if (!body.title || !body.description || !body.authorId) {
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
    const newRecipeId = await recipeRepository.createRecipe({
      title: body.title,
      description: body.description,
      authorId: body.authorId,
    });

    // 2️⃣ 재료 저장 (배열 데이터 처리)
    if (body.ingredients?.length) {
      await Promise.all(
        body.ingredients.map((ingredient: RecipeIngredientCreateDto) =>
          recipeIngredientRepository.addIngredient(newRecipeId, ingredient)
        )
      );
    }

    // 3️⃣ 조리 과정 저장
    if (body.steps?.length) {
      await Promise.all(
        body.steps.map((step: string, index: number) =>
          recipeStepRepository.addStep(newRecipeId, index + 1, step)
        )
      );
    }

    // 4️⃣ 이미지 저장
    if (body.images?.length) {
      await Promise.all(
        body.images.map((imageUrl: string) =>
          recipeImageRepository.addRecipeImage(newRecipeId, imageUrl)
        )
      );
    }

    // 5️⃣ 저장된 레시피 반환
    const savedRecipe = await recipeDetailUsecase.getRecipeDetail(newRecipeId);

    return NextResponse.json(savedRecipe, { status: 201 });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}