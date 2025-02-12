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

export const CookingSteps = ({ id }: CookingStepsProps) => {
  const [steps, setSteps] = useState<RecipeStepDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchSteps = async () => {
      try {
        const res = await fetch(`/api/recipe-steps?recipeId=${id}`);
        if (!res.ok) throw new Error(`Failed to fetch steps: ${res.status}`);
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

  return (
    <>
      {steps.map((data) => (
        <CookingCard key={data.order}>
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