"use client";

import {
  PhotoReviewContainer,
  PhotoContainer,
  Photo,
} from "./photoReview.style";

export const PhotoReview = () => {
  const photoUrl = "/recipe.jpg";

  return (
    <PhotoReviewContainer>
      <PhotoContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <Photo
            key={index}
            src={photoUrl}
            alt={`foodPhoto${index + 1}`}
            width={100}
            height={100}
            layout="fixed"
          />
        ))}
      </PhotoContainer>
    </PhotoReviewContainer>
  );
};
