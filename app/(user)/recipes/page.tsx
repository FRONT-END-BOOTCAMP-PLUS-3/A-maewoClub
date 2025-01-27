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
} from "@/components/recipe/recipe.style";
import RecipeCard from "@/components/recipe/recipeCard/recipeCard";
import RecipeCardSlide from "@/components/recipe/recipeCard/recipeCardSlide";
import Pagination from "@/components/recipe/cardPaging/cardPaging";
import Tag from "@/components/recipe/tag/tag";

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

  // 페이지네이션 상태 관리 -> controller 내용
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 5; // 페이지당 레시피 수
  const totalRecipes = 20; // 전체 레시피 수
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const currentRecipes = [...Array(totalRecipes)].slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <RecipeList>
      <Tag></Tag>
      <SubTitle>Top. 10</SubTitle>
      <RecipeSlideContainer>
        <SlideButton className="left" onClick={handlePrev}>
          ◀
        </SlideButton>
        <SlideTrack position={currentSlide}>
          {[...Array(slideCount)].map((_, index) => (
            <SlideWrapper key={index}>
              <RecipeCardSlide id={'2'}>{`레시피 ${index + 1}`}</RecipeCardSlide>
            </SlideWrapper>
          ))}
        </SlideTrack>
        <SlideButton className="right" onClick={handleNext}>
          ▶
        </SlideButton>
      </RecipeSlideContainer>

      <SubTitle>총 1000개의 레시피가 있습니다.</SubTitle>
      <RecipeContainer>
        {currentRecipes.map((_, index) => (
          <RecipeCard key={index} id={'2'}>
            레시피 {(currentPage - 1) * recipesPerPage + index + 1}
          </RecipeCard>
        ))}
      </RecipeContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

      <SubTitle>최근 본 레시피</SubTitle>
      <RecipeContainer>
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
