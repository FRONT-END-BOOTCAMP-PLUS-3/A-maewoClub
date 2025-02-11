"use client";
import { useRecipeStore } from "@/store/useRecipeStore";
import {
  CookCardDescription,
  CookCardImage,
  CookCardNumber,
  CookingCard,
  CookStepImage,
} from "./cookingStep.style";
import { useEffect } from "react";
import { RecipeStepDto } from "@/application/recipe/dto/RecipeStepDto";

interface CookingStepsProps {
  steps: RecipeStepDto[],
  recipeId : number;
}

export const CookingSteps = ({recipeId, steps}: CookingStepsProps) => {
  const { fetchRecipeData } = useRecipeStore();

  useEffect(() => {
    fetchRecipeData(recipeId);
    console.log("fetchRecipeData부분 cookingSteps data 확인용", fetchRecipeData);
  }, [recipeId, fetchRecipeData]);

  return (
    <>
      {steps.map((data) => (
        <CookingCard key={data.recipeId}>
          <CookCardNumber>{data.order}</CookCardNumber>
          <CookCardDescription>{data.content}</CookCardDescription>
          <CookCardImage>
            {data.imageUrl && (
              <CookStepImage
                src={data.imageUrl}
                alt="Recipe Image"
                fill
                sizes="(max-width: 768px) 20rem, 20rem"
              />
            )}
          </CookCardImage>
        </CookingCard>
      ))}
    </>
  );
};
