'use client'
import {
  PhotoReviewButton,
  PhotoReviewContainer,
  PhotoReviewTitle,
} from "./photoReview.style";

export const PhotoReview = () => {
  return (
    <PhotoReviewContainer>
      <PhotoReviewTitle></PhotoReviewTitle>
      <PhotoReviewButton></PhotoReviewButton>
      <PhotoReview></PhotoReview>
    </PhotoReviewContainer>
  );
};
