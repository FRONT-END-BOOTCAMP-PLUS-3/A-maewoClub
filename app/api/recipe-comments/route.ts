import { DfRecipeCommentListUsecase } from "@/application/recipe-comment/DfRecipeCommentListUsecase";
import { RecipeCommentWithImageDto } from "@/application/recipe-comment/dto/RecipeCommentWithImageDto";
import { RecipeCommentImageRepository } from "@/domain/repositories/RecipeCommentImageRepository";
import { RecipeCommentRepository } from "@/domain/repositories/RecipeCommentRepository";
import { SbRecipeCommentImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentImageRepository";
import { SbRecipeCommentRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentRepository";
import { NextRequest, NextResponse } from "next/server";

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
    // const body = await req.json();
    const body = await req.formData();

    const userId = body.get("userId") as string;
    const content = body.get("content") as string;
    const score = body.get("score");
    const image = body.get("image")

/*     if (!body.score || !body.userId || !body.content) {
      console.error("❌ Missing required fields", { score: body.score, userId: body.userId, content: body.content });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
     */

        if (!score || !userId || !content) {
      console.error("❌ Missing required fields", { score, userId, content });
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
      userId,
      content,  
      score,
      image,
    });
    
    const createRecipeCommentId =
    await recipeCommentRepository.addRecipeComment({
      recipeId: recipeId,
      userId: userId,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
      score: Number(score),
    });
    
    console.log("✅ Recipe comment created:", createRecipeCommentId);

    if (image) {
      const buffer = await (image as File).arrayBuffer(); // 파일을 Buffer로 변환
      const base64Image = Buffer.from(buffer).toString("base64"); // Base64로 변환
      const mimeType = (image as File).type; // 이미지 MIME 타입 (예: image/png)
      const photoUrl = `data:${mimeType};base64,${base64Image}`; // Base64 데이터 URL 생성
    
      await recipeCommentImageRepository.addRecipeCommentImage({
        id: createRecipeCommentId,
        photoUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userId,
      });
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
    // const body = await req.json();
    const body = await req.formData();

    const userId = body.get("userId") as string;
    const content = body.get("content") as string;
    const score = body.get("score");
    const id = body.get("id")
    const image = body.get("image")

    if (!score || !userId || !content || !id) {
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

    await recipeCommentRepository.findOne(id);
    if (image) {
      await recipeCommentImageRepository.findOne(id);
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
