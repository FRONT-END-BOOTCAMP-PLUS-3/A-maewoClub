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

export const PhotoReview: React.FC<PhotoReviewProps> = ({
  currentPage,
  nextPhotos,
  prevPhotos,
}) => {
  const photoUrl = "/recipe.jpg";

  return (
    <PhotoReviewContainer>
      <NavigationButton onClick={prevPhotos}>
        <MdKeyboardDoubleArrowLeft color="white" />
      </NavigationButton>
      <PhotoContainer>
        {Array.from({ length: 10 }).map((_, index) => (
          <PhotoWrapper
            key={index}
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Photo
              src={photoUrl}
              alt={`foodPhoto${index + 1}`}
              fill
              sizes="10rem"
            />
          </PhotoWrapper>
        ))}
      </PhotoContainer>
      <NavigationButton onClick={nextPhotos}>
        <MdKeyboardDoubleArrowRight color="white" />
      </NavigationButton>
    </PhotoReviewContainer>
  );
};
