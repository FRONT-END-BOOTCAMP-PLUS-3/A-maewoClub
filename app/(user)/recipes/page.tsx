"use client";

import { useState } from "react";
import {
  SubTitle,
  RecipeList,
  RecipeSlideContainer,
  SlideTrack,
  SlideWrapper,
  SlideButton,
  RecipeContainer,
  RecipeCard,
} from "@/components/recipe/recipe.style";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 10; // 슬라이드의 총 개수
  const visibleSlides = 3; // 화면에 보여질 슬라이드 개수
  const maxIndex = Math.ceil(slideCount / visibleSlides) - 1;

  const handleNext = () => {
    setCurrentSlide((prev) => Math.max(prev - 100, -100 * maxIndex));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.min(prev + 100, 0));
  };

  return (
    <RecipeList>
      <SubTitle>Top. 10</SubTitle>
      <RecipeSlideContainer>
        <SlideButton className="left" onClick={handlePrev}>
          ◀
        </SlideButton>
        <SlideTrack position={currentSlide}>
          {[...Array(slideCount)].map((_, index) => (
            <SlideWrapper key={index}>
              <RecipeCard>{`레시피 ${index + 1}`}</RecipeCard>
            </SlideWrapper>
          ))}
        </SlideTrack>
        <SlideButton className="right" onClick={handleNext}>
          ▶
        </SlideButton>
      </RecipeSlideContainer>

      <SubTitle>총 1000개의 레시피가 있습니다.</SubTitle>
      <RecipeContainer>
        {[...Array(7)].map((_, index) => (
          <RecipeCard key={index}>레시피 {index + 1}</RecipeCard>
        ))}
      </RecipeContainer>

      <SubTitle>최근 본 레시피</SubTitle>
      <RecipeContainer>
        {/* <RecipeCard>최근 레시피</RecipeCard> */}
        <RecipeSlideContainer>
        <SlideButton className="left" onClick={handlePrev}>
          ◀
        </SlideButton>
        <SlideTrack position={currentSlide}>
          {[...Array(slideCount)].map((_, index) => (
            <SlideWrapper key={index}>
              <RecipeCard>{`레시피 ${index + 1}`}</RecipeCard>
            </SlideWrapper>
          ))}
        </SlideTrack>
        <SlideButton className="right" onClick={handleNext}>
          ▶
        </SlideButton>
        </RecipeSlideContainer>
      </RecipeContainer>
    </RecipeList>
  );
}