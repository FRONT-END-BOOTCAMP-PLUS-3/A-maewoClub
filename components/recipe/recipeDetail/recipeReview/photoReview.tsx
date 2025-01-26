"use client";

import {
  PhotoReviewContainer,
  PhotoReviewTitle,
  Photo,
} from "./photoReview.style";

export const PhotoReview = () => {
  const photoUrl = "/recipe.jpg";

  return (
    <PhotoReviewContainer>
      <PhotoReviewTitle>포토리뷰</PhotoReviewTitle>
      {/* TODO: 포토리뷰 5개만 보이도록 */}
      {photoUrl && (
        <Photo src={photoUrl} alt="foodPhoto" width={100} height={100} />
      )}
    </PhotoReviewContainer>
  );
};
