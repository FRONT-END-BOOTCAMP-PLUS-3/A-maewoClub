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
    const body = await req.formData();

    const userId = body.get("userId") as string;
    const content = body.get("content") as string;
    const score = body.get("score");
    const image = body.get("image")



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
    
    const createRecipeCommentId =
    await recipeCommentRepository.addRecipeComment({
      recipeId: recipeId,
      userId: userId,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
      score: Number(score),
    });
    
    if (image) {
      const buffer = await (image as File).arrayBuffer(); 
      const base64Image = Buffer.from(buffer).toString("base64"); 
      const mimeType = (image as File).type; 
      const photoUrl = `data:${mimeType};base64,${base64Image}`;
    
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
    const body = await req.formData();

    const id = Number(body.get("id")) 
    const createdAt = String(body.get("createdAt"))
    const userId = String(body.get("userId"))
    const content = String(body.get("content"))
    const score = Number(body.get("score"))
    const image = body.get("image")

    if (!score || !userId || !content || !id) {
      return NextResponse.json(
        { error: "필수 값이 없습니다." },
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

    await recipeCommentRepository.updateRecipeComment({
      id: id,
      userId: userId,
      content: content,
      updatedAt: new Date(),
      score: score,
    });
    
    if (image) {
      const buffer = await (image as File).arrayBuffer(); // 파일을 Buffer로 변환
      const base64Image = Buffer.from(buffer).toString("base64"); // Base64로 변환
      const mimeType = (image as File).type; // 이미지 MIME 타입 (예: image/png)
      const photoUrl = `data:${mimeType};base64,${base64Image}`; // Base64 데이터 URL 생성
      
      await recipeCommentImageRepository.updateRecipeCommentImage({
        id: id,
        photoUrl,
        createdAt: createdAt,
        updatedAt: new Date(),
        userId: userId,
      });
      }

    const updateRecipeComment =
      await recipeCommentImageUsecase.getRecipeComment(id);

    return NextResponse.json(updateRecipeComment, { status: 200 });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try{
    const body = await req.json();

    if (!body.id) {
      return NextResponse.json(
        { error: "필수 값이 없습니다." },
        { status: 400 }
      );
    }

    const recipeCommentRepository: RecipeCommentRepository =
    new SbRecipeCommentRepository();
    const recipeCommentImageRepository: RecipeCommentImageRepository =
    new SbRecipeCommentImageRepository();

    await recipeCommentImageRepository.deleteByImageId(body.id);
    await recipeCommentRepository.deleteByCommentId(body.id);

    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  }catch(error){
    console.error("Error creating recipe:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
