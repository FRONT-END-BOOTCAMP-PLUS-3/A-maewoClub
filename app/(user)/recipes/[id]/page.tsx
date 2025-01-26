"use client";

import { RecipeDetailContainer } from "@/components/recipe/recipe.style";
import { CookingSteps } from "@/components/recipe/recipeDetail/cookingStep/cookingSteps";
import { RecipeUserProfile } from "@/components/recipe/recipeDetail/recipeUserProfile/recipeUserProfile";
import { PhotoReview } from "@/components/recipe/recipeDetail/recipeReview/photoReview";
import { CookReview } from "@/components/recipe/recipeDetail/recipeReview/cookReview";

const RecipePage = () => {
  return (
    <RecipeDetailContainer>
      <RecipeUserProfile />
      <CookingSteps />
      <PhotoReview />
      <CookReview />
    </RecipeDetailContainer>
  );
};

export default RecipePage;
