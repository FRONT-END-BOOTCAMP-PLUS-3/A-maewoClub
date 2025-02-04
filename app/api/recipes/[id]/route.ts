import { DfRecipeDetailUsecase } from "@/application/recipe/DfRecipeDetailUsecase";
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
import { NextResponse } from "next/server";

export async function GET(){
  const recipeRepository:RecipeRepository = new SbRecipeRepository();
  const recipeIngredientRepository: RecipeIngredientRepository = new SbRecipeIngredientRepository();
  const recipeStepRepository:RecipeStepRepository = new SbRecipeStepRepository();
  const recipeCommentRepository: RecipeCommentRepository = new SbRecipeCommentRepository;
  const recipeImageRepository: RecipeImageRepository = new SbRecipeImageRepository; 

  const recipeDetailUsecase = new DfRecipeDetailUsecase(recipeRepository, recipeImageRepository, recipeIngredientRepository, recipeStepRepository, recipeCommentRepository);

  return NextResponse.json(recipeDetailUsecase);
}