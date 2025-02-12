import { create } from "zustand";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeIngredientDto } from "@/application/recipe/dto/RecipeIngredientDto";
import { RecipeStepDto } from "@/application/recipe/dto/RecipeStepDto";
import { RecipeImageDto } from "@/application/recipe/dto/RecipeImageDto";
import { RecipeCommentDto } from "@/application/recipe-comment/dto/RecipeCommentDto";
import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";

interface RecipeState {
  recipe: RecipeDto | undefined;
  ingredients: RecipeIngredientDto[];
  steps: RecipeStepDto[];
  images: RecipeImageDto[];
  reviewData: RecipeCommentDto[];
  reviewImageData: RecipeCommentImageDto[];
  isLoading: boolean;
  error: string | null;

  setRecipe: (recipe: RecipeDto) => void;
  setIngredients: (ingredients: RecipeIngredientDto[]) => void;
  setSteps: (steps: RecipeStepDto[]) => void;
  setImages: (images: RecipeImageDto[]) => void;
  setReviewData: (reviewData: RecipeCommentDto[]) => void;
  setReviewImageData: (reviewImageData: RecipeCommentImageDto[]) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipe: undefined,
  ingredients: [],
  steps: [],
  images: [],
  reviewData: [],
  reviewImageData:[],
  isLoading: false,
  error: null,

  setRecipe: (recipe) => set({ recipe }),
  setIngredients: (ingredients) => set({ ingredients }),
  setSteps: (steps) => set({ steps }),
  setImages: (images) => set({ images }),
  setReviewData: (reviewData) => set({ reviewData }),
  setReviewImageData: (reviewImageData) => set({ reviewImageData }),
}));