"use client";

import {
  SubTitle,
  RecipeDetailContainer,
  TitleBox,
  ReviewMoreButton,
  SortButtonContainer,
  SortButton,
  WriteReviewButton,
} from "@/components/recipe/recipeDetail/recipeDetailPage.style";
import {
  CookingSteps,
  testDatas,
} from "@/components/recipe/recipeDetail/cookingStep/cookingSteps";
import { RecipeUserProfile } from "@/components/recipe/recipeDetail/recipeUserProfile/recipeUserProfile";
import { PhotoReview } from "@/components/recipe/recipeDetail/recipeReview/photoReview";
import {
  CookReview,
  reviewTestData,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview";
import { useState } from "react";
import { ReviewModal } from "@/components/recipe/recipeDetail/reviewModal/reviewModal";

const RecipeDetailPage = () => {
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [reviewShowAll, setReviewShowAll] = useState(false);
  const [sortType, setSortType] = useState("points");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReview = () => {
    setReviewShowAll(true);
  };

  const handleShowMoreSteps = () => {
    setShowAllSteps(true);
  };
  const handleSort = (type: string) => {
    setSortType(type);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const stepsToShow = showAllSteps ? testDatas : testDatas.slice(0, 2);
  const reviewToShow = reviewShowAll
    ? reviewTestData
    : reviewTestData.slice(0, 2);

  const sortedReviews = [...reviewToShow].sort((a, b) => {
    if (sortType === "points") {
      return b.points - a.points;
    } else if (sortType === "latest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  return (
    <RecipeDetailContainer>
      <RecipeUserProfile />
      <CookingSteps steps={stepsToShow} />
      {!showAllSteps && (
        <ReviewMoreButton onClick={handleShowMoreSteps}>
          더보기
        </ReviewMoreButton>
      )}

      <WriteReviewButton onClick={handleOpenModal}>리뷰 작성</WriteReviewButton>
      <ReviewModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <TitleBox>
        <SubTitle>포토리뷰</SubTitle>
      </TitleBox>
      <PhotoReview></PhotoReview>
      <SortButtonContainer>
        <SortButton
          active={sortType === "points"}
          onClick={() => handleSort("points")}
        >
          별점순
        </SortButton>
        <SortButton
          active={sortType === "latest"}
          onClick={() => handleSort("latest")}
        >
          최신순
        </SortButton>
      </SortButtonContainer>
      <CookReview review={sortedReviews} />
      {!reviewShowAll && (
        <ReviewMoreButton onClick={handleReview}>더보기</ReviewMoreButton>
      )}
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
