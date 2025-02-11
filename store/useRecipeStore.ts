import { create } from "zustand";

import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeIngredientDto } from "@/application/recipe/dto/RecipeIngredientDto";
import { RecipeStepDto } from "@/application/recipe/dto/RecipeStepDto";
import { RecipeImageDto } from "@/application/recipe/dto/RecipeImageDto";
import { RecipeCommentDto } from "@/application/recipe-comment/dto/RecipeCommentDto";
import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";
import { RecipeQuery } from "@/hook/useRecipeQuery";
import { IngredientsQuery } from "@/hook/useIngredientsQuery";
import { StepsQuery } from "@/hook/useStepsQuery";
import { CommentsQuery } from "@/hook/useCommentsQuery";
import { RecipeImagesQuery } from "@/hook/useImagesQuery";

interface RecipeState {
  recipe: RecipeDto | null;
  ingredients: RecipeIngredientDto[];
  steps: RecipeStepDto[];
  images: RecipeImageDto[];
  reviewData: RecipeCommentDto[];
  reviewImgData: RecipeCommentImageDto[];
  isLoading: boolean;
  error: string | null;

  fetchRecipeData: (id: number) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipe: null,
  ingredients: [],
  steps: [],
  images: [],
  reviewData: [],
  reviewImgData: [],
  isLoading: false,
  error: null,

  fetchRecipeData: (id: number) => {
    set({ isLoading: true, error: null });

    const { data: recipe, isLoading: recipeLoading, error: recipeError } = RecipeQuery(id);
    const { data: ingredients, isLoading: ingredientsLoading, error: ingredientsError } = IngredientsQuery(id);
    const { data: steps, isLoading: stepsLoading, error: stepsError } = StepsQuery(id);
    const { data: images, isLoading: imagesLoading, error: imagesError } = RecipeImagesQuery(id);
    const { data: comments, isLoading: commentsLoading, error: commentsError } = CommentsQuery(id);
    

    const isLoading = recipeLoading || ingredientsLoading || stepsLoading || imagesLoading || commentsLoading;
    const error = recipeError || ingredientsError || stepsError || imagesError || commentsError;

    if (error) {
      set({
        error: `레시피 정보를 불러오는 중 오류가 발생했습니다: ${(error as Error).message}`,
        isLoading: false,
      });
      return;
    }

    // const reviewImgData = comments?.map((review: RecipeCommentDto) => review.photoUrl || []);

    set({
      recipe,
      ingredients,
      steps,
      images,
      reviewData: comments || [],
      // reviewImgData,
      isLoading,
    });
  },
}));
