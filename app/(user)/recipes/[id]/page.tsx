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
import {
  CookReview,
  reviewTestData,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview";
import { useEffect, useRef, useState } from "react";
import { ReviewModal } from "@/components/recipe/recipeDetail/reviewModal/reviewModal";
import {
  SortButtonContainer,
  SortButton,
} from "@/components/recipe/recipeDetail/recipeReview/cookReview.style";
import { Ingredient } from "@/components/recipe/recipeDetail/recipeIngredient/ingredient";

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

  // GET
  useEffect(() => {
      const getComments = async () => {
        try {
          const response = await fetch(`/api/recipe-comments`);
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
  },[])
  
  // POST
  useEffect(() => {
    const postComments = async () => {
      try {
        const response = await fetch(`/api/recipe-comments`, {
          method: 'POST',
          body: JSON.stringify({
            score: 5,
            userId: 1,
            content: "맛있어요",
            recipeId: 1,
            image: ["image1", "image2"]
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },[])
  // PUT
  useEffect(() => {
    const putComments = async () => {
      try {
        const response = await fetch(`/api/recipe-comments/1`, {
          method: 'PUT',
          body: JSON.stringify({
            score: 5,
            userId: 1,
            content: "맛있어요",
            recipeId: 1,
            image: ["image1", "image2"]
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },[])
  // Delete
  useEffect(() => {
    const deleteComments = async () => {
      try {
        const response = await fetch(`/api/recipe-comments/1`, {
          method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },[])



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
  // 리뷰 등록
  const handleRegister = () => {
    const review = reviewRef.current?.value;
    const image = imageRef.current?.files?.[0];
    console.log("ModalReview:", review);
    console.log("InputImage:", image);
    console.log("ModalPoint:", selectedFire);
    handleCloseModal();
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
  const reviewToShow = reviewShowAll
    ? reviewTestData
    : reviewTestData.slice(0, 2);

  // 리뷰 정렬
  const sortedReviews = [...reviewToShow].sort((a, b) => {
    if (sortType === "points") {
      return b.points - a.points;
    } else if (sortType === "latest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  const [currentPage, setCurrentPage] = useState(0);
  const photosPerPage = 5;
  const totalPhotos = 10;

  const nextPhotos = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(totalPhotos / photosPerPage)
    );
  };

  const prevPhotos = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(totalPhotos / photosPerPage)) %
        Math.ceil(totalPhotos / photosPerPage)
    );
  };

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
        handleRegister={handleRegister}
        reviewRef={reviewRef}
        imageRef={imageRef}
        handleImageChange={handleImageChange}
        imageName={imageName}
      />

      <TitleBox>
        <SubTitle>포토리뷰</SubTitle>
      </TitleBox>
      <PhotoReview
        currentPage={currentPage}
        nextPhotos={nextPhotos}
        prevPhotos={prevPhotos}
      />
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
      <CookReview review={sortedReviews} />
      {!reviewShowAll && (
        <ReviewMoreButton onClick={handleReview}>더보기</ReviewMoreButton>
      )}
    </RecipeDetailContainer>
  );
};

export default RecipeDetailPage;
