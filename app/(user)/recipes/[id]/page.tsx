"use client";

import {
  SubTitle,
  RecipeDetailContainer,
  TitleBox,
  ReviewMoreButton,
  WriteReviewButton,
} from "@/components/recipe/recipeDetail/recipeDetailPage.style";
import {
  CookingSteps,
  testDatas,
} from "@/components/recipe/recipeDetail/cookingStep/cookingSteps";
import { RecipeUserProfile } from "@/components/recipe/recipeDetail/recipeUserProfile/recipeUserProfile";
import { PhotoReview } from "@/components/recipe/recipeDetail/recipeReview/photoReview";
import { CookReview, ReviewData } from "@/components/recipe/recipeDetail/recipeReview/cookReview";
import { useEffect, useState } from "react";
import { ReviewModal } from "@/components/recipe/recipeDetail/reviewModal/reviewModal";
import {
  SortButtonContainer,
  SortButton,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview.style";
import { Ingredient } from "@/components/recipe/recipeDetail/recipeIngredient/ingredient";
import { usePathname } from "next/navigation";

const RecipeDetailPage = () => {
  // 리뷰 관련 상태
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [reviewShowAll, setReviewShowAll] = useState(false);
  const [sortType, setSortType] = useState("points");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname(); 
  const pathSegments = pathname.split("/");
  const recipeId = Number(pathSegments[pathSegments.length - 1]);

  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  const [imgData, setImgData] = useState<string[]>([]);



// TODO : UserId
  const userId = "12546258-59a4-4eb6-86cc-88e2d2421aa1";

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


  return (
    <RecipeDetailContainer>
      <RecipeUserProfile />
      <CookingSteps steps={stepsToShow} />
      {!showAllSteps && (
        <ReviewMoreButton onClick={handleShowMoreSteps}>
          더보기
        </ReviewMoreButton>
      )}
      <Ingredient />
      <WriteReviewButton onClick={handleOpenModal}>리뷰 작성</WriteReviewButton>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        userId={userId}
        recipeId={recipeId}
        isUpdate={false}
        createdAt={null}
        reviewId={null}
      ></ReviewModal>

      <TitleBox>
        <SubTitle>포토리뷰</SubTitle>
      </TitleBox>
    <PhotoReview imgData={imgData} />
      <SortButtonContainer>
        <SortButton
          className={sortType === "points" ? "active" : ""}
          onClick={() => handleSort("points")}
        >
          별점순
        </SortButton>
        <SortButton
          className={sortType === "latest" ? "active" : ""}
          onClick={() => handleSort("latest")}
        >
          최신순
        </SortButton>
      </SortButtonContainer>
      <CookReview 
        recipeId={recipeId}
        userId={userId}
        reviewData={reviewData}
       />
      {!reviewShowAll && (
        <ReviewMoreButton onClick={handleReview}>더보기</ReviewMoreButton>
      )}
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
