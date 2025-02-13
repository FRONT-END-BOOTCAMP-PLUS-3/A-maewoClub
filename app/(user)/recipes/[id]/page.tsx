"use client";

import { useState, useEffect } from "react";
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
import { ReviewModal } from "@/components/recipe/recipeDetail/reviewModal/reviewModal";
import {
  SortButtonContainer,
  SortButton,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview.style";
import { Ingredient } from "@/components/recipe/recipeDetail/recipeIngredient/ingredient";
import { CookReview } from "@/components/recipe/recipeDetail/recipeReview/cookReview";
import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { RecipeCommentDto } from "@/application/recipe-comment/dto/RecipeCommentDto";
import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";
import { useParams } from "next/navigation";

const RecipeDetailPage = () => {
  const params = useParams();
  const id = Number(params.id);

  const [showAllSteps, setShowAllSteps] = useState(false);
  const [reviewShowAll, setReviewShowAll] = useState(false);
  const [sortType, setSortType] = useState("points");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState<RecipeCommentDto[]>([]);
  const [imgData, setImgData] = useState<RecipeCommentImageDto[]>([]);

  const [recipe, setRecipe] = useState<RecipeDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = "12546258-59a4-4eb6-86cc-88e2d2421aa1";

  useEffect(() => {
    if (!id) {
      console.error("🚨 recipeId가 없습니다!");
      return;
    }

    const getComments = async () => {
      try {
        const res = await fetch(`/api/recipe-comments?recipeId=${id}`, {
          method: "GET",
        });
        if (!res.ok) {
          const errorText = await res.text(); // 서버에서 응답한 에러 메시지 출력
          throw new Error(`API 요청 실패 (${res.status}): ${errorText}`);
        }

        const data: RecipeCommentDto[] = await res.json();
        console.log(data, "📢 댓글 데이터 로드 완료!");
        setReviewData(data);

        // 리뷰 이미지 배열 생성 (이미지가 있는 경우만)
        const images: string[] = data
          .flatMap((review) => review.image || [])
          .map((image: RecipeCommentImageDto) => image.photoUrl);

        setImgData(images);
      } catch (error) {
        console.error("❌ 리뷰 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/recipes/detail?id=${id}`, { method: "GET" });
        if (!res.ok) {
          const errorText = await res.text(); // 서버에서 응답한 에러 메시지 출력
          throw new Error(`API 요청 실패 (${res.status}): ${errorText}`);
        }

        const data: RecipeDto = await res.json();
        console.log("🍽 레시피 데이터 로드 완료!", data);
        setRecipe(data);
      } catch (err) {
        setError("레시피 정보를 불러오는 중 오류가 발생했습니다.");
        console.error("❌ 레시피 데이터를 불러오는 중 오류 발생:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
    getComments();
  }, [id]);

  if (isLoading) return <div>Loading 중입니다...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>레시피 정보를 찾을 수 없습니다.</div>;

  const handleSort = (type: string) => {
    setSortType(type);
  };

  return (
    <RecipeDetailContainer>
      <RecipeUserProfile id={recipe.id} userId={recipe.userId}/>

      <CookingSteps id={recipe.id} />

      {!showAllSteps && (
        <ReviewMoreButton onClick={() => setShowAllSteps(true)}>더보기</ReviewMoreButton>
      )}

      <Ingredient id={recipe.id} />

      <WriteReviewButton onClick={() => setIsModalOpen(true)}>리뷰 작성</WriteReviewButton>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={userId}
        recipeId={recipe.id}
        isUpdate={false}
        createdAt={null}
        reviewId={null}
      />

      <TitleBox>
        <SubTitle>포토리뷰</SubTitle>
      </TitleBox>

      <PhotoReview id={recipe.id} />

      <SortButtonContainer>
        <SortButton className={sortType === "points" ? "active" : ""} onClick={() => handleSort("points")}>
          별점순
        </SortButton>
        <SortButton className={sortType === "latest" ? "active" : ""} onClick={() => handleSort("latest")}>
          최신순
        </SortButton>
      </SortButtonContainer>

      <CookReview
        recipeId={recipe.id}
        userId={recipe.userId}
        reviewData={reviewData}
        reviewImgData={imgData}
      />

      {!reviewShowAll && (
        <ReviewMoreButton onClick={() => setReviewShowAll(true)}>더보기</ReviewMoreButton>
      )}
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;