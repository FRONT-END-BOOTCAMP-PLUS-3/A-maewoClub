import { DfRecipeCommentListUsecase } from "@/application/recipe/DfRecipeCommentListUsecase";
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

  const recipeCommentImageUsecase: DfRecipeCommentListUsecase =
    new DfRecipeCommentListUsecase(
      recipeCommentRepository,
      recipeCommentImageRepository
    );
  const recipeCommentListDto = await recipeCommentImageUsecase.execute(id);

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

    const recipeCommentImageUsecase: DfRecipeCommentListUsecase =
      new DfRecipeCommentListUsecase(
        recipeCommentRepository,
        recipeCommentImageRepository
      );

    // repo 저장하는 함수는 add로 시작
    // 라우트로 불러 오는 함수는 create로 시작

    // Image는 옵션 -> 이미지가 있을 때만 저장하는 함수를 만들어야 함.
    // 함수 분리하기

    // user ID
    // 레포지토리 따로 분리해서 저장 함수

    // recipe_ comment 레포지토리에 저장하는 함수
    // score
    // content
    // recipe ID

    const createRecipeCommentId =
      await recipeCommentRepository.addRecipeComment({
        id: body.id,
        recipeId: body.recipeId,
        content: body.content,
        createdAt: new Date(),
        score: body.score,
      });
    //  user ID 레포지토리 따로 분리해서 저장 함수만들어

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
