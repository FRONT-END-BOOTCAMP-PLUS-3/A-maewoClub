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
import { useEffect, useState } from "react";
import { ReviewModal } from "@/components/recipe/recipeDetail/reviewModal/reviewModal";
import {
  SortButtonContainer,
  SortButton,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview.style";
import { Ingredient } from "@/components/recipe/recipeDetail/recipeIngredient/ingredient";
import { CookReview } from "@/components/recipe/recipeDetail/recipeReview/cookReview";
import { useRecipeStore } from "@/store/useRecipeStore";

type pageProps = {
  id: number;
}
const RecipeDetailPage = ({id}: pageProps) => {
  const userId = "12546258-59a4-4eb6-86cc-88e2d2421aa1";

  const {recipe, reviewData, reviewImgData, ingredients, steps, isLoading, error, fetchRecipeData } = useRecipeStore();

  const [showAllSteps, setShowAllSteps] = useState(false);
  const [reviewShowAll, setReviewShowAll] = useState(false);
  const [sortType, setSortType] = useState("points");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchRecipeData(id);
    console.log("recipe data 값 보자", fetchRecipeData);
  }, [id, fetchRecipeData]);

  const handleSort = (type: string) => {
    setSortType(type);
  };

  if (isLoading) return <div>Loading 중입니다...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>레시피 정보를 찾을 수 없습니다.</div>;

  return (
    <RecipeDetailContainer>
      <RecipeUserProfile id={recipe.id} />

      <CookingSteps
        steps={showAllSteps ? steps : steps.slice(0, 2)}
        recipeId={recipe.id}
      />

      {!showAllSteps && (
        <ReviewMoreButton onClick={() => setShowAllSteps(true)}>
          더보기
        </ReviewMoreButton>
      )}

      <Ingredient id={recipe.id} ingredients={ingredients} />

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

      <PhotoReview id={recipe.id} imgData={reviewImgData} />

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

      <CookReview recipeId={recipe.id} userId={recipe.userId} reviewData={reviewData} reviewImgData={reviewImgData}/>

      {!reviewShowAll && (
        <ReviewMoreButton onClick={() => {
          setReviewShowAll(true);
        }}>더보기</ReviewMoreButton>
      )}
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
