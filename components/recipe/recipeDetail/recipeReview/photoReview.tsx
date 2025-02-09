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
// import { useEffect, useState } from "react";

interface PhotoReviewProps {
  recipeId: number
  currentPage: number;
  nextPhotos: () => void;
  prevPhotos: () => void;
}
export const PhotoReview  = ({
  recipeId,
  currentPage,
  nextPhotos,
  prevPhotos,
}: PhotoReviewProps) => {
  
// TODO : 이미지 url 받아오기, Photo 상태관리 해당 페이지로 가져오기
// const [commentImages, setCommentImages] = useState([]);

  // useEffect(() => {
  //   const getCommentImages = async (id:number) => {
  //   try {
  //     const res = await fetch(`/api/recipe-comments_image?recipeId=${id}`,
  //       {
  //         method: "GET",
  //       });
  //     const data = await res.json();

  //     const imageUrls = data.map((base64String: string) => {
  //       const mimeType = base64String.match(/^data:(image\/\w+);base64,/)?.[1] || "image/png";
  //       const byteCharacters = atob(base64String.split(",")[1]);
  //       const byteNumbers = new Array(byteCharacters.length)
  //         .fill(0)
  //         .map((_, i) => byteCharacters.charCodeAt(i));
  //       const byteArray = new Uint8Array(byteNumbers);
  //       const blob = new Blob([byteArray], { type: mimeType });
  //       return URL.createObjectURL(blob); // ✅ Blob URL 생성
  //     });

  //     setCommentImages(imageUrls);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // };
  //   getCommentImages(recipeId);
  // }, [recipeId]);

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
            {/* {commentImages.map((image: string, index: number) => (
              <Photo
                key={index}
                src={image}
                alt={`foodPhoto ${index}`}
                fill
                sizes="10rem"
              />
            ))} */}
          </PhotoWrapper>
    
      </PhotoContainer>
      <NavigationButton onClick={nextPhotos}>
        <MdKeyboardDoubleArrowRight color="white" />
      </NavigationButton>
    </PhotoReviewContainer>
  );
};
