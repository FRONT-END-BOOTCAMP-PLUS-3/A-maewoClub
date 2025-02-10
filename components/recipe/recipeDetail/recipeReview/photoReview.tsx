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

// interface PhotoReviewProps {}
export const PhotoReview  = ({}) => {

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
            {imgData.map((photo_url: string, index: number) => (
              <Photo
                key={index}
                src={photo_url}
                alt={`foodPhoto ${index}`}
                fill
                sizes="10rem"
              />
            ))}
          </PhotoWrapper>
    
      </PhotoContainer>
      <NavigationButton onClick={nextPhotos}>
        <MdKeyboardDoubleArrowRight color="white" />
      </NavigationButton>
    </PhotoReviewContainer>
  );
};
