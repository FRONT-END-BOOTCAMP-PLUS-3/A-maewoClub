"use client";

import { useEffect, useState } from "react";
import {
  SubTitle,
  RecipeList,
  RecipeSlideContainer,
  SlideTrack,
  SlideWrapper,
  SlideButton,
  RecipeContainer,
  CreateBtn,
} from "@/components/recipe/recipe.style";
import RecipeCard from "@/components/recipe/recipeCard/recipeCard";
import RecipeCardSlide from "@/components/recipe/recipeCard/recipeCardSlide";
import Pagination from "@/components/recipe/cardPaging/cardPaging";
import Tag from "@/components/recipe/tag/tag";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  // Top 10 레시피 -> controller 분리 usecase 에 함수 분리 필요함. 
  const [topCurrentSlide, setTopCurrentSlide] = useState(0);
  const topSlideCount = 10; // Top 10 슬라이드 개수
  const topVisibleSlides = 3; // 한 번에 보여줄 개수
  const topMaxIndex = Math.ceil(topSlideCount / topVisibleSlides) - 1;

  const handleTopNext = () => {
    setTopCurrentSlide((prev) => Math.max(prev - 100, -100 * topMaxIndex));
  };

  const handleTopPrev = () => {
    setTopCurrentSlide((prev) => Math.min(prev + 100, 0));
  };

  // 최근 본 레시피 슬라이드-> controller 로직 분리
  const recentRecipes = [
    { id: 1, title: "김치찌개" },
    { id: 2, title: "된장찌개" },
    { id: 3, title: "불고기" },
    { id: 4, title: "잡채" },
    { id: 5, title: "떡볶이" },
  ];
  const [recentCurrentSlide, setRecentCurrentSlide] = useState(0);
  const recentVisibleSlides = 3;
  const recentMaxIndex = Math.ceil(recentRecipes.length / recentVisibleSlides) - 1;

  const handleRecentNext = () => {
    setRecentCurrentSlide((prev) => Math.max(prev - 100, -100 * recentMaxIndex));
  };

  const handleRecentPrev = () => {
    setRecentCurrentSlide((prev) => Math.min(prev + 100, 0));
  };

  // 페이지네이션 상태 관리
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

  const moveToPage = () => {
    router.push("/recipes/create");
  };

  return (
    <RecipeList>
      <Tag />
      <CreateBtn onClick={moveToPage}>+</CreateBtn>

      <SubTitle>Top. 10</SubTitle>
      <RecipeSlideContainer>
        <SlideButton className="left" onClick={handleTopPrev} disabled={topCurrentSlide === 0}>
          ◀
        </SlideButton>
        <SlideTrack position={topCurrentSlide}>
          {[...Array(topSlideCount)].map((_, index) => (
            <SlideWrapper key={index}>
              <RecipeCardSlide id={`${index + 1}`}>{`레시피 ${index + 1}`}</RecipeCardSlide>
            </SlideWrapper>
          ))}
        </SlideTrack>
        <SlideButton className="right" onClick={handleTopNext} disabled={topCurrentSlide <= -100 * topMaxIndex}>
          ▶
        </SlideButton>
      </RecipeSlideContainer>

      <SubTitle>총 {totalRecipes}개의 레시피가 있습니다.</SubTitle>
      <RecipeContainer>
        {currentRecipes.map((_, index) => (
          <RecipeCard key={index} id={`${(currentPage - 1) * recipesPerPage + index + 1}`}>
            레시피 {(currentPage - 1) * recipesPerPage + index + 1}
          </RecipeCard>
        ))}
      </RecipeContainer>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <SubTitle>최근 본 레시피</SubTitle>
      <RecipeContainer>
        <RecipeSlideContainer>
          <SlideButton className="left" onClick={handleRecentPrev} disabled={recentCurrentSlide === 0}>
            ◀
          </SlideButton>
          <SlideTrack position={recentCurrentSlide}>
            {recentRecipes.map((recipe) => (
              <SlideWrapper key={recipe.id}>
                <RecipeCard id={`${recipe.id}`}>{recipe.title}</RecipeCard>
              </SlideWrapper>
            ))}
          </SlideTrack>
          <SlideButton className="right" onClick={handleRecentNext} disabled={recentCurrentSlide <= -100 * recentMaxIndex}>
            ▶
          </SlideButton>
        </RecipeSlideContainer>
      </RecipeContainer>
    </RecipeList>
  );
}