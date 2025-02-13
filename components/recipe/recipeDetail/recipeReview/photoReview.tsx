"use client";

import { useEffect, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import {
  PhotoReviewContainer,
  PhotoContainer,
  PhotoWrapper,
  Photo,
  NavigationButton,
} from "./photoReview.style";
import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";

type PhotoReviewProps = {
  id: number;
};

export const PhotoReview = ({ id }: PhotoReviewProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [listImageData, setListData] = useState<RecipeCommentImageDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecipeImage = async () => {
      if (!id) return;
      setIsLoading(true);
      try {
        const res = await fetch(`/api/comment-images?id=${id}`, { method: "GET" });
        if (!res.ok) throw new Error("Failed to fetch images");
        console.log("댓글 이미지 불러오기 성공공", res)
        const data: RecipeCommentImageDto[] = await res.json();
        console.log("댓글 이미지 불러오기 확인", data)
        setListData(data);
      } catch (error) {
        console.error("Error 댓글 이미지 불러오기 성공 에러 ✅:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeImage();
  }, [id]);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listImageData.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listImageData.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return <div>Loading 중입니다...</div>;
  }

  if (listImageData.length === 0) {
    return <div>이미지가 없습니다.</div>;
  }

  return (
    <PhotoReviewContainer>
      <NavigationButton onClick={prevPhoto} disabled={listImageData.length <= 1}>
        <MdKeyboardDoubleArrowLeft color="white" />
      </NavigationButton>

      <PhotoContainer>
        <PhotoWrapper
          style={{
            display: "flex",
            gap: "10px",
            transform: `translateX(-${(currentIndex * 100) / listImageData.length}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {listImageData.map((image, index) => (
            <Photo
              key={image.id}
              src={image.photoUrl}
              alt={`foodPhoto ${index}`}
              width={150}
              height={150}
            />
          ))}
        </PhotoWrapper>
      </PhotoContainer>

      <NavigationButton onClick={nextPhoto} disabled={listImageData.length <= 1}>
        <MdKeyboardDoubleArrowRight color="white" />
      </NavigationButton>
    </PhotoReviewContainer>
  );
};