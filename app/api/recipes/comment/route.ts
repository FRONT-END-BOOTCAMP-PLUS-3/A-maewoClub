import { DfRecipeCommentListUsecase } from "@/application/recipe/DfRecipeCommentListUsecase";
import { RecipeCommentImageRepository } from "@/domain/repositories/recipes/RecipeCommentImageRepository";
import { RecipeCommentRepository } from "@/domain/repositories/recipes/RecipeCommentRepository";
import { SbRecipeCommentImageRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentImageRepository";
import { SbRecipeCommentRepository } from "@/infrastructure/repositories/recipes/SbRecipeCommentRepository";
import { NextResponse } from "next/server";

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
