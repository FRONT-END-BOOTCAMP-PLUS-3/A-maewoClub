"use client";

import { Container } from "../../../../components/recipe/recipeDetail/recipeDetailPage.style";
import { RecipeUserProfile } from "../../../../components/recipe/recipeDetail/recipeUserProfile";
import { CookingSteps } from "../../../../components/recipe/recipeDetail/cookingSteps";
// import { PhotoReview } from "../photoReview";
// import { CookReview } from "../cookReview";

const RecipePage = () => {
  return (
    <Container>
      <RecipeUserProfile />
      <CookingSteps />
      {/* <PhotoReview /> */}
      {/* <CookReview /> */}
    </Container>
  );
};

export default RecipePage;
