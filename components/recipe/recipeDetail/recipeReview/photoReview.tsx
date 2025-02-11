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

type PhotoReviewProps ={
  imgData: (string | null)[];
}

export const PhotoReview  = ({ imgData }: PhotoReviewProps) => {
  const [validImgData, setValidImgData] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const filteredData = imgData.filter((photo): photo is string => photo !== null);
    setValidImgData(filteredData);
  }, [imgData]);

    const nextPhoto = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validImgData.length);
    };
  
    const prevPhoto = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? validImgData.length - 1 : prevIndex - 1
      );
    };

  return (
    <PhotoReviewContainer>
      <NavigationButton onClick={prevPhoto} disabled={validImgData.length <= 1}>
        <MdKeyboardDoubleArrowLeft color="white" />
      </NavigationButton>

      <PhotoContainer>
          <PhotoWrapper
            style={{
              display: "flex",
              gap: "10px",
              transform: `translateX(-${(currentIndex * 100) / validImgData.length}%)`, // 스와이프 효과
              transition: "transform 0.3s ease-in-out",
            }}>
            {validImgData.map((photo_url: string, index: number) => (
              <Photo
                key={index}
                src={photo_url}
                alt={`foodPhoto ${index}`}
                width={150} 
                height={150}
              />
            ))}
          </PhotoWrapper>
      </PhotoContainer>

      <NavigationButton onClick={nextPhoto} disabled={validImgData.length <= 1}>
        <MdKeyboardDoubleArrowRight color="white" />
      </NavigationButton>
    </PhotoReviewContainer>
  );
};
