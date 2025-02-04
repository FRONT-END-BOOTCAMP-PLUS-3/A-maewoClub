import { DfRecipeCommentListUsecase } from "@/application/recipe/DfRecipeCommentListUsecase";
import { RecipeCommentListDto } from "@/application/recipe/dto/RecipeCommentListDto";
import { RecipeCommentImageRepository } from "@/domain/repositories/recipes/RecipeCommentImageRepository";
import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { SbRecipeCommentImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentImageRepository";
import { SbRecipeCommentRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(id: number) {
  const recipeCommentRepository: RecipeCommentRepository =
    new SbRecipeCommentRepository();

  const recipeCommentImageRepository: RecipeCommentImageRepository =
    new SbRecipeCommentImageRepository();

  const recipeCommentImageUsecase = new DfRecipeCommentListUsecase(
    recipeCommentRepository,
    recipeCommentImageRepository
  );
  const recipeCommentListDto: RecipeCommentListDto =
    await recipeCommentImageUsecase.execute(id);

  return NextResponse.json(recipeCommentListDto);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.score || !body.userId || !body.content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const recipeCommentRepository: RecipeCommentRepository =
      new SbRecipeCommentRepository();
    const recipeCommentImageRepository: RecipeCommentImageRepository =
      new SbRecipeCommentImageRepository();

    const recipeCommentImageUsecase = new DfRecipeCommentListUsecase(
      recipeCommentRepository,
      recipeCommentImageRepository
    );

    const createRecipeCommentId =
      await recipeCommentRepository.addRecipeComment({
        recipeId: body.recipeId,
        content: body.content,
        createdAt: new Date(),
        score: body.score,
      });

    if (body.image?.length) {
      await Promise.all(
        body.image.map((imageUrl: string) => {
          recipeCommentImageRepository.addRecipeCommentImage(
            createRecipeCommentId,
            imageUrl
          );
        })
      );
    }

    // user ID
    // 레포지토리 따로 분리해서 저장 함수

    const savedRecipeComment = await recipeCommentImageUsecase.getRecipeComment(
      createRecipeCommentId
    );

    return NextResponse.json(savedRecipeComment, { status: 200 });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.score || !body.userId || !body.content || !body.id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const recipeCommentRepository: RecipeCommentRepository =
      new SbRecipeCommentRepository();
    const recipeCommentImageRepository: RecipeCommentImageRepository =
      new SbRecipeCommentImageRepository();

    const recipeCommentImageUsecase = new DfRecipeCommentListUsecase(
      recipeCommentRepository,
      recipeCommentImageRepository
    );

    await recipeCommentRepository.deleteByCommentId(body.id);
    if (body.image?.length) {
      await recipeCommentImageRepository.deleteByImageId(body.id);
    }

    const updateRecipeCommentId =
      await recipeCommentRepository.updateRecipeComment({
        id: body.id,
        recipeId: body.recipeId,
        content: body.content,
        updatedAt: new Date(),
        score: body.score,
      });

    if (body.image?.length) {
      await Promise.all(
        body.image.map((imageUrl: string) => {
          recipeCommentImageRepository.addRecipeCommentImage(
            updateRecipeCommentId,
            imageUrl
          );
        })
      );
    }

    const savedRecipeComment = await recipeCommentImageUsecase.getRecipeComment(
      updateRecipeCommentId
    );

    return NextResponse.json(savedRecipeComment, { status: 200 });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function Delete(id: number) {
  const recipeCommentRepository: RecipeCommentRepository =
    new SbRecipeCommentRepository();
  const recipeCommentImageRepository: RecipeCommentImageRepository =
    new SbRecipeCommentImageRepository();
  const recipeCommentImageUsecase: DfRecipeCommentListUsecase =
    new DfRecipeCommentListUsecase(
      recipeCommentRepository,
      recipeCommentImageRepository
    );

  await recipeCommentImageUsecase.deleteRecipeCommentImage(id);
  return NextResponse.json({ message: "Deleted" });
}
