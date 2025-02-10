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
import { useEffect, useRef, useState } from "react";
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

  // 모달 관련 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFire, setSelectedFire] = useState<number | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const reviewRef = useRef<HTMLTextAreaElement>(null!);
  const imageRef = useRef<HTMLInputElement>(null!);

  const pathname = usePathname(); 
  const pathSegments = pathname.split("/");
  const recipeId = Number(pathSegments[pathSegments.length - 1]);

  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  const [imgData, setImgData] = useState<string[]>([]);
 

// TODO : UserId
  const userId = "12546258-59a4-4eb6-86cc-88e2d2421aa1";

  useEffect(() => {
    const getComments = async (recipeId: number) => {
      try {
        const res = await fetch(`/api/recipe-comments?recipeId=${recipeId}`,
          {
            method: "GET",
          });
        const data = await res.json();  
        setReviewData(data);
        setImgData(data.map((review: ReviewData) => review.imageUrl));
      } catch (error) {
        console.log(error);
      }
    };
    getComments(recipeId);
    }, [recipeId]);


      // const [recipe, setRecipe] = useState<RecipeDto | null>(null);
      // const [isLoading, setIsLoading] = useState(true);
      // const [error, setError] = useState<string | null>(null);
    
      // useEffect(() => {
      //   if (!id) return;
    
      //   const fetchRecipe = async () => {
      //     setIsLoading(true);
      //     try {
      //       const res = await fetch(`/api/recipes/${id}`);
      //       if (!res.ok) throw new Error("Failed to fetch recipe data");
            
      //       const data: RecipeDto = await res.json();
      //       setRecipe(data);
      //     } catch (err) {
      //       setError("레시피 정보를 불러오는 중 오류가 발생했습니다.");
      //       console.error("Error fetching recipe:", err);
      //     } finally {
      //       setIsLoading(false);
      //     }
      //   };
    
      //   fetchRecipe();
      // }, [id]);
    
      // if (isLoading) return <div>Loading 중입니다...</div>;
      // if (error) return <div>{error}</div>;
      // if (!recipe) return <div>레시피 정보를 찾을 수 없습니다.</div>;
    

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
    setSelectedFire(null);
    setImageName(null);
    setIsModalOpen(false);
  };

  const handleFireClick = (index: number) => {
    setSelectedFire(index);
  };
  

  // 이미지 파일 이름 표시
  const handleImageChange = () => {
    const image = imageRef.current?.files?.[0];
    if (image) {
      setImageName(image.name);
    }
  };

  // 레시피 상세페이지에서 보여줄 데이터
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
        selectedFire={selectedFire}
        handleFireClick={handleFireClick}
        reviewRef={reviewRef}
        imageRef={imageRef}
        handleImageChange={handleImageChange}
        imageName={imageName}
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
