import { DfRecipeDetailUsecase } from "@/application/recipe/DfRecipeDetailUsecase";
import { DfRecipeListUsecase } from "@/application/recipe/DfRecipeListUsecase";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeIngredientDto } from "@/application/recipe/dto/RecipeIngredientDto";
import { RecipeUpdateDto } from "@/application/recipe/dto/RecipeUpdateDto";
import { RecipeStep } from "@/domain/entities/RecipeStep";
import { RecipeImageRepository } from "@/domain/repositories/RecipeImageRepository";
import { RecipeIngredientRepository } from "@/domain/repositories/RecipeIngredientRepository";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { RecipeStepRepository } from "@/domain/repositories/RecipeStepRepository";
import { SbRecipeImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeImageRepository";
import { SbRecipeIngredientRepository } from "@/infrastructure/repositories/recipes/SbRecipeIngredientRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository"
import { SbRecipeStepRepository } from "@/infrastructure/repositories/recipes/SbRecipeStepRepository";
import { NextRequest, NextResponse } from "next/server";

// recipes/route
export async function GET(){
  const recipeRepository:RecipeRepository = new SbRecipeRepository();
  const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository; 

  const recipeListUsecase = new DfRecipeListUsecase(recipeRepository, recipeImageRepository );

  const { recipes }: { recipes: RecipeDto[] } = await recipeListUsecase.findAllRecipes();
  return NextResponse.json(recipes);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 필수 데이터 체크
    if (!body.title || !body.description || !body.userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const recipeRepository: RecipeRepository = new SbRecipeRepository();
    const recipeIngredientRepository: RecipeIngredientRepository = new SbRecipeIngredientRepository();
    const recipeStepRepository: RecipeStepRepository = new SbRecipeStepRepository();
    const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository();

    const recipeDetailUsecase = new DfRecipeDetailUsecase(
      recipeRepository,
      recipeImageRepository,
      recipeIngredientRepository,
      recipeStepRepository
    );

    // createRecipe
    const createRecipeId = await recipeRepository.addRecipe({
      title: body.title,
      description: body.description,
      userId: body.userId,
    });

    // addIngredients
    if (body.ingredients?.length) {
      await Promise.all(
        body.ingredients.map((ingredient: RecipeIngredientDto) =>
          recipeIngredientRepository.addIngredient(createRecipeId, ingredient)
        )
      );
    }

    // addStep
    if (body.steps?.length) {
      await Promise.all(
        body.steps.map((step: RecipeStep, index: number) =>
          recipeStepRepository.addStep(createRecipeId, index + 1, step)
        )
      );
    }

    // create Image
    if (body.images?.length) {
      await Promise.all(
        body.images.map((photoUrl: string) =>
          recipeImageRepository.addRecipeImage(createRecipeId, photoUrl)
        )
      );
    }

    // 생성된 레시피 상세 정보 반환
    const createRecipe = await recipeDetailUsecase.getRecipeDetail(createRecipeId);

    return NextResponse.json(createRecipe, { status: 200 });
  } catch (error) {
    console.error("recipe 생성중 POST Error :", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body: RecipeUpdateDto = await req.json();
    const { recipeId, title, description, userId, ingredients, steps, images, replaceData } = body;
    // 필수 값 있는지 확인. 
    if (!recipeId || !title || !description || !userId) {
      return NextResponse.json({ error: " 필수 값이 없습니다. Error" }, { status: 400 });
    }

    const recipeRepository:RecipeRepository = new SbRecipeRepository;
    const recipeIngredientRepository:RecipeIngredientRepository = new SbRecipeIngredientRepository;
    const recipeStepRepository:RecipeStepRepository = new SbRecipeStepRepository;
    const  recipeImageRepository:RecipeImageRepository = new SbRecipeImageRepository;
    const recipeDetailUsecase = new DfRecipeDetailUsecase(
      recipeRepository,
      recipeImageRepository,
      recipeIngredientRepository,
      recipeStepRepository
    );

  // 레시피 기본 정보 업데이트
await recipeRepository.updateRecipe(body);
    // replace
    if (replaceData) {
      await recipeIngredientRepository.deleteIngredientsByRecipeId(recipeId);
      await recipeStepRepository.deleteStepsByRecipeId(recipeId);
      await recipeImageRepository.deleteImagesByRecipeId(recipeId);
    }

    // addIngredients
    if (ingredients?.length) {
      await Promise.all(
        ingredients.map((ingredient: RecipeIngredientDto) =>
          recipeIngredientRepository.addIngredient(recipeId, ingredient)
        )
      );
    }

    // addStep
    if (steps?.length) {
      const existingSteps = replaceData ? [] : await recipeStepRepository.getStepsByRecipeId(recipeId);
      const startIndex = existingSteps.length + 1;

      await Promise.all(
        steps.map((steps: RecipeStep, index: number) =>
          recipeStepRepository.addStep(recipeId, startIndex + index, steps)
        )
      );
    }

    // addImages
    // 단일 이미지, 복수 이미지 여부를 special type으로 줌.
    if (images?.length) {
      await Promise.all(
        images.map((photoUrl: string) =>
          recipeImageRepository.addRecipeImage(recipeId, photoUrl)
        )
      );
    }

    // update recipe
    const updatedRecipe = await recipeDetailUsecase.getRecipeDetail(recipeId);
    return NextResponse.json(updatedRecipe, { status: 200 });

  } catch (error) {
    console.error("recipe 수정중 PUT Error :", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const recipeId = Number(searchParams.get("recipeId"));

    if (!recipeId) {
      return NextResponse.json({ error: "recipeId" }, { status: 400 });
    }
    const recipeRepository:RecipeRepository = new SbRecipeRepository;
    const recipeIngredientRepository:RecipeIngredientRepository = new SbRecipeIngredientRepository;
    const recipeStepRepository:RecipeStepRepository = new SbRecipeStepRepository;
    const  recipeImageRepository:RecipeImageRepository = new SbRecipeImageRepository;

    // 관련 데이터 삭제
    await recipeIngredientRepository.deleteIngredientsByRecipeId(recipeId);
    await recipeStepRepository.deleteStepsByRecipeId(recipeId);
    await recipeImageRepository.deleteImagesByRecipeId(recipeId);
    await recipeRepository.deleteRecipe(recipeId);

    return NextResponse.json({ message: "Recipe deleted 성공입니다~" }, { status: 200 });

  } catch (error) {
    console.error("recipe 삭제중 DELETE Error :", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}