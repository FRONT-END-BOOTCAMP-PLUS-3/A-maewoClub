"use client";

import { useState, useEffect } from "react";
import {
  CookCardDescription,
  CookCardImage,
  CookCardNumber,
  CookingCard,
  CookStepImage,
} from "./cookingStep.style";
import { RecipeStepDto } from "@/application/recipe/dto/RecipeStepDto";

interface CookingStepsProps {
  id: number;
}

<<<<<<< HEAD
export const CookingSteps = ({ id }: CookingStepsProps) => {

  const [steps, setSteps] = useState<RecipeStepDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchSteps = async () => {
      try {
        const res = await fetch(`/api/recipe-steps?id=${id}`);
        if (!res.ok) throw new Error(`Failed to fetch steps: ${res.status}`);
        console.log("fetchres", res)
        const data = await res.json();
        console.log("data recipe step 확인용", data);
        setSteps(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSteps();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생: {error}</div>;
  if (steps.length === 0) return <div>조리 과정이 없습니다.</div>;
=======
export const CookingSteps = ({ steps, recipeId }: CookingStepsProps) => {
>>>>>>> 69398b844aa967225a87708d4351576ffe262a7f

  const test = () => {
    const id = recipeId;
  }
  return (
    <>
      {steps.map((step) => (
        <CookingCard key={step.order}>
          <CookCardNumber>{step.order}</CookCardNumber>
          <CookCardDescription>{step.content}</CookCardDescription>
          <CookCardImage>
            {step.imageUrl && (
              <CookStepImage
                src={step.imageUrl}
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