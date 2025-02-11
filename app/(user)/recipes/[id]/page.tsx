"use client";

import {
  SubTitle,
  RecipeDetailContainer,
  TitleBox,
  ReviewMoreButton,
  WriteReviewButton,
} from "@/components/recipe/recipeDetail/recipeDetailPage.style";
import {
  SortButtonContainer,
  SortButton,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview.style";
import { Ingredient } from "@/components/recipe/recipeDetail/recipeIngredient/ingredient";
import { useParams } from "next/navigation";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { CookReview, ReviewData } from "@/components/recipe/recipeDetail/recipeReview/cookReview";
import { useEffect, useState } from "react";
import { ReviewModal } from "@/components/recipe/recipeDetail/reviewModal/reviewModal";
import { PhotoReview } from "@/components/recipe/recipeDetail/recipeReview/photoReview";
import { CookingSteps, testDatas } from "@/components/recipe/recipeDetail/cookingStep/cookingSteps";
import { RecipeUserProfile } from "@/components/recipe/recipeDetail/recipeUserProfile/recipeUserProfile";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  // ------------------------------------------------------------------------------
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [reviewShowAll, setReviewShowAll] = useState(false);
  const [sortType, setSortType] = useState("points");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  const [imgData, setImgData] = useState<string[]>([]);
  
  const [recipe, setRecipe] = useState<RecipeDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = "12546258-59a4-4eb6-86cc-88e2d2421aa1";

  useEffect(() => {
    const getComments = async (recipeId: number) => {
      try {
        const res = await fetch(`/api/recipe-comments?recipeId=${recipeId}`, {
          method: "GET",
        });
        const data = await res.json();
        console.log(data, "data recipeComment 입니다!!!!")
        setReviewData(data);
        setImgData(data.map((review: ReviewData) => review.imageUrl));
      } catch (error) {
        console.log(error);
      }
    };
    if (!recipeId) return;

    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/recipes/${recipeId}`, { method: "GET" });
        if (!res.ok) throw new Error("Failed to fetch recipe data");

        const data: RecipeDto = await res.json();
        console.log("recipeDetail 호출중입니다!!!", data)
        setRecipe(data);
      } catch (err) {
        setError("레시피 정보를 불러오는 중 오류가 발생했습니다.");
        console.error("Error fetching recipe:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();

    getComments(recipeId);
  }, [recipeId]);

  if (isLoading) return <div>Loading 중입니다...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>레시피 정보를 찾을 수 없습니다.</div>;

  const handleSort = (type: string) => {
    setSortType(type);
  };
  const stepsToShow = showAllSteps ? testDatas : testDatas.slice(0, 2);

  return (
    <RecipeDetailContainer>
      <RecipeUserProfile id={recipe.id} />
      <CookingSteps steps={stepsToShow} recipeId={recipe.id} />
      {!showAllSteps && (
        <ReviewMoreButton onClick={() => {
          setShowAllSteps(true);
        }}>
          더보기
        </ReviewMoreButton>
      )}
      <Ingredient />
      <WriteReviewButton onClick={() => {
    setIsModalOpen(true);
  }}>리뷰 작성</WriteReviewButton>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
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
      <CookReview recipeId={recipeId} userId={userId} reviewData={reviewData} />
      {!reviewShowAll && (
        <ReviewMoreButton onClick={() => {
          setReviewShowAll(true);
        }}>더보기</ReviewMoreButton>
      )}
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
