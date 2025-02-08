"use client";

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

interface PhotoReviewProps {
  currentPage: number;
  nextPhotos: () => void;
  prevPhotos: () => void;
}
export const PhotoReview  = ({
  currentPage,
  nextPhotos,
  prevPhotos,
}: PhotoReviewProps) => {

  const photoUrl = "/recipe.jpg";

// TODO : 이미지 url 받아오기, Photo 상태관리 해당 페이지로 가져오기
  return (
    <PhotoReviewContainer>
      <NavigationButton onClick={prevPhotos}>
        <MdKeyboardDoubleArrowLeft color="white" />
      </NavigationButton>
      <PhotoContainer>
   
          <PhotoWrapper
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Photo
              src={photoUrl}
              alt={`foodPhoto`}
              fill
              sizes="10rem"
            />
          </PhotoWrapper>
    
      </PhotoContainer>
      <NavigationButton onClick={nextPhotos}>
        <MdKeyboardDoubleArrowRight color="white" />
      </NavigationButton>
    </PhotoReviewContainer>
  );
};
