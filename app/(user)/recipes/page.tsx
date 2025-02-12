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
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";

export default function Page() {
  const [listData, setListData] = useState<RecipeDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recentCurrentSlide, setRecentCurrentSlide] = useState(0);
  const [topCurrentSlide, setTopCurrentSlide] = useState(0);


  const recipesPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/recipes", { method: "GET" });
        const data = await res.json();
        console.log("data recipe main 확인용", data);
        setListData(data);
      } catch (error) {
        console.error("Error fetching recipes ✅:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  // if (isLoading) {
  //   return <div>Loading 중입니다...</div>;
  // }

  const topRecipes = listData.filter((recipe) => recipe.likeCount).slice(0, 10);
  const topVisibleSlides = 3;
  const topMaxIndex = Math.ceil(topRecipes.length / topVisibleSlides) - 1;

  const handleTopNext = () => {
    setTopCurrentSlide((prev) => Math.max(prev - 100, -100 * topMaxIndex));
  };
  const handleTopPrev = () => {
    setTopCurrentSlide((prev) => Math.min(prev + 100, 0));
  };

  const recentRecipes = [...listData]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const recentVisibleSlides = 3;
  const recentMaxIndex = Math.ceil(recentRecipes.length / recentVisibleSlides) - 1;

  const handleRecentNext = () => {
    setRecentCurrentSlide((prev) => Math.max(prev - 100, -100 * recentMaxIndex));
  };
  const handleRecentPrev = () => {
    setRecentCurrentSlide((prev) => Math.min(prev + 100, 0));
  };

  const totalRecipes = listData.length;
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = listData.slice(indexOfFirstRecipe, indexOfLastRecipe);

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

      <SubTitle>Top 10</SubTitle>
      <RecipeSlideContainer>
        <SlideButton className="left" onClick={handleTopPrev} disabled={topCurrentSlide === 0}>◀</SlideButton>
        <SlideTrack position={topCurrentSlide}>
          {topRecipes.map((recipe) => (
            <SlideWrapper key={recipe.likeCount}>
              <RecipeCardSlide id={recipe.id}>{recipe.title}</RecipeCardSlide>
            </SlideWrapper>
          ))}
        </SlideTrack>
        <SlideButton className="right" onClick={handleTopNext} disabled={topCurrentSlide <= -100 * topMaxIndex}>▶</SlideButton>
      </RecipeSlideContainer>

      <SubTitle>총 {totalRecipes}개의 레시피가 있습니다.</SubTitle>
      <RecipeContainer>
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id}>{recipe.title}</RecipeCard>
        ))}
      </RecipeContainer>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

      <SubTitle>최근 본 레시피</SubTitle>
      <RecipeContainer>
        <RecipeSlideContainer>
          <SlideButton className="left" onClick={handleRecentPrev} disabled={recentCurrentSlide === 0}>◀</SlideButton>
          <SlideTrack position={recentCurrentSlide}>
            {recentRecipes.map((recipe) => (
              <SlideWrapper key={recipe.id}>
                <RecipeCard id={recipe.id}>{recipe.title}</RecipeCard>
              </SlideWrapper>
            ))}
          </SlideTrack>
          <SlideButton className="right" onClick={handleRecentNext} disabled={recentCurrentSlide <= -100 * recentMaxIndex}>▶</SlideButton>
        </RecipeSlideContainer>
      </RecipeContainer>
    </RecipeList>
  );
}
