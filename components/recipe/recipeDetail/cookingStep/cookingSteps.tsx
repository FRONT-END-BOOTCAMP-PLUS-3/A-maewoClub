"use client";
import Image from "next/image";
import {
  CookCardDescription,
  CookCardImage,
  CookCardNumber,
  CookingCard,
} from "./cookingStep.style";

export const testDatas = [
  {
    number: 1,
    description: "양파와 어쩌구 준비해줍니다!",
    image: "/recipe.jpg",
  },
  {
    number: 2,
    description:
      "0양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다양파와 어쩌구 준비해줍니다!",
    image: "/recipe.jpg",
  },
  {
    number: 3,
    description: "양파와 어쩌구 준비해줍니다!",
    image: "/recipe.jpg",
  },
  {
    number: 4,
    description: "양파와 어쩌구 준비해줍니다!",
    image: "/recipe.jpg",
  },
  {
    number: 5,
    description: "양파와 어쩌구 준비해줍니다!",
    image: "/recipe.jpg",
  },
];

type CookingStep = {
  number: number;
  description: string;
  image: string;
};

interface CookingStepsProps {
  steps: CookingStep[];
}

export const CookingSteps = ({ steps }: CookingStepsProps) => {
  return (
    <>
      {steps.map((data) => (
        <CookingCard key={data.number}>
          <CookCardNumber>{data.number}</CookCardNumber>
          <CookCardDescription>{data.description}</CookCardDescription>
          <CookCardImage>
            <Image
              src={data.image}
              alt="Recipe Image"
              width={100}
              height={100}
            />
          </CookCardImage>
        </CookingCard>
      ))}
    </>
  );
};
