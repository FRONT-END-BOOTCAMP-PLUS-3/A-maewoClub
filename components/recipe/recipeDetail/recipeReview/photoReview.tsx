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
import { RecipeImageDto } from "@/application/recipe/dto/RecipeImageDto";
import { useRecipeStore } from "@/store/useRecipeStore";

type PhotoReviewProps ={
  // imgData: (string | null)[];
  id: number;
  imgData: RecipeImageDto[];
}

export const PhotoReview  = ({id, imgData }: PhotoReviewProps) => {
  // const [validImgData, setValidImgData] = useState<string[]>([]);
  const {fetchRecipeData} = useRecipeStore();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // const filteredData = imgData.filter((photo): photo is string => photo !== null);
    // setValidImgData(filteredData);
    fetchRecipeData(id);
    console.log("recipeReview Image 부분 패칭 되는지")
  }, [id, imgData, fetchRecipeData]);

    const nextPhoto = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgData.length);
    };
  
    const prevPhoto = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imgData.length - 1 : prevIndex - 1
      );
    };

  return (
    <PhotoReviewContainer>
      <NavigationButton onClick={prevPhoto} disabled={imgData.length <= 1}>
        <MdKeyboardDoubleArrowLeft color="white" />
      </NavigationButton>

      <PhotoContainer>
          <PhotoWrapper
            style={{
              display: "flex",
              gap: "10px",
              transform: `translateX(-${(currentIndex * 100) / imgData.length}%)`, // 스와이프 효과
              transition: "transform 0.3s ease-in-out",
            }}>
            {/* {imgData.map((photo_url: string, index: number) => (
              <Photo
                key={index}
                src={photo_url}
                alt={`foodPhoto ${index}`}
                width={150} 
                height={150}
              />
            ))} */}
          </PhotoWrapper>
      </PhotoContainer>

      <NavigationButton onClick={nextPhoto} disabled={imgData.length <= 1}>
        <MdKeyboardDoubleArrowRight color="white" />
      </NavigationButton>
    </PhotoReviewContainer>
  );
};
