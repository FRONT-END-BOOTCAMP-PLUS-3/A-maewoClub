import { DfRecipeCommentListUsecase } from "@/application/recipe-comment/DfRecipeCommentListUsecase";
import { RecipeCommentWithImageDto } from "@/application/recipe-comment/dto/RecipeCommentWithImageDto";
import { RecipeCommentImageRepository } from "@/domain/repositories/RecipeCommentImageRepository";
import { RecipeCommentRepository } from "@/domain/repositories/RecipeCommentRepository";
import { SbRecipeCommentImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentImageRepository";
import { SbRecipeCommentRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentRepository";
import { NextRequest, NextResponse } from "next/server";
import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";

export async function GET(req: NextRequest) {
  const recipeCommentRepository: RecipeCommentRepository =
    new SbRecipeCommentRepository();
  const recipeCommentImageRepository: RecipeCommentImageRepository =
    new SbRecipeCommentImageRepository();

  const recipeCommentListUsecase = new DfRecipeCommentListUsecase(
    recipeCommentRepository,
    recipeCommentImageRepository
  );

  const url = new URL(req.url);
  const id = Number(url.searchParams.get("recipeId"))

  const recipeCommentListDto:RecipeCommentWithImageDto[] = 
    await recipeCommentListUsecase.getRecipeAllCommentListTest(id);

  return NextResponse.json(recipeCommentListDto);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.score || !body.userId || !body.content) {
      console.error("❌ Missing required fields", { score: body.score, userId: body.userId, content: body.content });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    const recipeCommentRepository: RecipeCommentRepository = new SbRecipeCommentRepository();
    const recipeCommentImageRepository: RecipeCommentImageRepository = new SbRecipeCommentImageRepository();

    const recipeCommentImageUsecase = new DfRecipeCommentListUsecase(
      recipeCommentRepository,
      recipeCommentImageRepository
    );

    const url = new URL(req.url);
    const recipeId = Number(url.searchParams.get("recipeId")) 

    if (isNaN(recipeId)) {
      console.error("❌ Invalid recipeId:", recipeId);
      return NextResponse.json(
        { error: "Invalid recipe ID" },
        { status: 400 }
      );
    }

    console.log("📌 Creating recipe comment with:", {
      recipeId,
      userId : body.userId,
      content: body.content,
      score: body.score,
    });
    
    const createRecipeCommentId =
    await recipeCommentRepository.addRecipeComment({
      recipeId: recipeId,
      userId: body.userId,
      content: body.content,
      createdAt: new Date(),
      updatedAt: new Date(),
      score: body.score,
    });
    
    console.log("✅ Recipe comment created:", createRecipeCommentId);

    if (body.images?.length) {
      await Promise.all(
        body.images.map((photoUrl: string) => {
          recipeCommentImageRepository.addRecipeCommentImage(
            createRecipeCommentId,
            photoUrl
          );
        })
      );
      console.log("✅ Recipe comment images added:", body.image);
    }

    const recipeCommentComment = await recipeCommentImageUsecase.getRecipeComment(createRecipeCommentId);

    return NextResponse.json(recipeCommentComment, { status: 200 });

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

    await recipeCommentRepository.findOne(body.id);
    if (body.image?.length) {
      await recipeCommentImageRepository.findOne(body.id);
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
        body.image.map((image: RecipeCommentImageDto) => {
          recipeCommentImageRepository.addRecipeCommentImage(
            updateRecipeCommentId,
            image.imageUrl
          );
        })
      );
    }

    const createRecipeComment =
      await recipeCommentImageUsecase.getRecipeComment(updateRecipeCommentId);

    return NextResponse.json(createRecipeComment, { status: 200 });
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
