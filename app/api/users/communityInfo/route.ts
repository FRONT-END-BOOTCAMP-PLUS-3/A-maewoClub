import { UserInfoModalDto } from "@/application/users/dto/UserInfoModalDto";
import { BoardRepository } from "@/domain/repositories/BoardRepository";
import { RecipeRepository } from "@/domain/repositories/RecipeRepository";
import { SbBoardRepository } from "@/infrastructure/repositories/boards/SbBoardRepository";
import { SbRecipeRepository } from "@/infrastructure/repositories/recipes/SbRecipeRepository";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
        return NextResponse.json({ error: "userId가 필요합니다." }, { status: 400 });
    }
    
    try {
        const recipeRepository: RecipeRepository = new SbRecipeRepository();
        const boardRepository: BoardRepository = new SbBoardRepository();

        const userRecipes = await recipeRepository.findRecipeByUserId(userId)
        const userBoards = await boardRepository.findBoardByUserId(userId)

        const UserInfoModalDto:UserInfoModalDto = { userRecipes, userBoards };

        return NextResponse.json({ UserInfoModalDto });

    }catch (error) {
        console.error("❌ 게시판 조회 중 에러 발생:", error);
        return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
    }
}