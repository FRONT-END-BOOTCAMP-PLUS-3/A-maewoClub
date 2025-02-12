"use client";

import {
  SubTitle,
  RecipeDetailContainer,
  TitleBox,
  ReviewMoreButton,
  WriteReviewButton,
} from "@/components/recipe/recipeDetail/recipeDetailPage.style";
import { CookingSteps } from "@/components/recipe/recipeDetail/cookingStep/cookingSteps";
import { RecipeUserProfile } from "@/components/recipe/recipeDetail/recipeUserProfile/recipeUserProfile";
import { PhotoReview } from "@/components/recipe/recipeDetail/recipeReview/photoReview";
import { useState } from "react";
import { ReviewModal } from "@/components/recipe/recipeDetail/reviewModal/reviewModal";
import {
  SortButtonContainer,
  SortButton,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview.style";
import { Ingredient } from "@/components/recipe/recipeDetail/recipeIngredient/ingredient";
import { CookReview } from "@/components/recipe/recipeDetail/recipeReview/cookReview";

type PageProps = {
  id: number;
};

const RecipeDetailPage = ({recipeId }: PageProps) => {
  const userId = "12546258-59a4-4eb6-86cc-88e2d2421aa1";
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [reviewShowAll, setReviewShowAll] = useState(false);
  const [sortType, setSortType] = useState("points");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <RecipeDetailContainer>
      <RecipeUserProfile id={recipeId} />

      <CookingSteps
        steps={showAllSteps ? steps : steps.slice(0, 2)}
        id={recipeId}
      />

      {!showAllSteps && (
        <ReviewMoreButton onClick={() => setShowAllSteps(true)}>
          더보기
        </ReviewMoreButton>
      )}

      <Ingredient id={recipeId} />

      <WriteReviewButton onClick={() => setIsModalOpen(true)}>
        리뷰 작성
      </WriteReviewButton>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={userId}
        recipeId={id}
        isUpdate={false}
        createdAt={null}
        reviewId={null}
      />

      <TitleBox>
        <SubTitle>포토리뷰</SubTitle>
      </TitleBox>

      <PhotoReview id={recipeId} imgData={images} />

      <SortButtonContainer>
        <SortButton
          className={sortType === "points" ? "active" : ""}
          onClick={() => setSortType("points")}
        >
          별점순
        </SortButton>
        <SortButton
          className={sortType === "latest" ? "active" : ""}
          onClick={() => setSortType("latest")}
        >
          최신순
        </SortButton>
      </SortButtonContainer>

      <CookReview
        recipeId={recipe.id}
        userId={recipe.userId}
        reviewData={reviewData}
        reviewImgData={reviewImageData}
      />

      {!reviewShowAll && (
        <ReviewMoreButton onClick={() => setReviewShowAll(true)}>
          더보기
        </ReviewMoreButton>
      )}
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;