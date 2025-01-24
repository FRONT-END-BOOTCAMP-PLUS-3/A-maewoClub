"use client";

import { Container } from "../recipeDetailPage.style";
import { RecipeUserProfile } from "../recipeUserProfile";
import { CookingSteps } from "../cookingSteps";
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
