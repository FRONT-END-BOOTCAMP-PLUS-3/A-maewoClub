"use client";

import RecipeCardSlide from "@/components/recipe/recipeCard/recipeCardSlide";
import RecipeCard from "@/components/recipe/recipeCard/recipeCard";
import {
  SubTitle,
  RecipeList,
  RecipeSlideContainer,
  RecipeContainer,
} from "@/components/recipe/recipe.style";

export default function Page() {
  return (
    <RecipeList>
      <SubTitle>Top. 10</SubTitle>
      <RecipeSlideContainer>
        <RecipeCardSlide />
      </RecipeSlideContainer>

      <SubTitle>총 1000개의 레시피가 있습니다.</SubTitle>
      <RecipeContainer>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </RecipeContainer>

      <SubTitle>최근 본 레시피</SubTitle>
      <RecipeContainer>
        <RecipeCard />
      </RecipeContainer>
    </RecipeList>
  );
}