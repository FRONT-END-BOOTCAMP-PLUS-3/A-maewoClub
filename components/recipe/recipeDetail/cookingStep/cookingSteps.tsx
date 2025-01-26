"use client";
import Image from "next/image";
import {
  CookCardDescription,
  CookCardImage,
  CookCardNumber,
  CookingCard,
} from "./cookingStep.style";

export const CookingSteps = () => {
  return (
    <CookingCard>
      <CookCardNumber>1</CookCardNumber>
      <CookCardDescription>
        양파와 어쩌구 준비해줍니다!양파와 어쩌구 준비해줍니다양파와 어쩌구
        준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와
        어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다
        어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다
        어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다
        어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다
        어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다
        어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다
        어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다
      </CookCardDescription>
      {/* TODO: 더보기 구현 */}
      <CookCardImage>
        <Image src="/recipe.jpg" alt="Recipe Image" width={100} height={100} />
      </CookCardImage>
    </CookingCard>
  );
};
