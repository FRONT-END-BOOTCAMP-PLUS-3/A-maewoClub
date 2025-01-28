"use client";

import { useState } from "react";
import { InputImage } from "../recipeDetail/reviewModal/reviewModal.style";
import { Text, Button, IngredientInput } from "./recipeCreate.style";
import {
  StepsContainer,
  RecipeCompletionImageUpload,
  InputImageLabel,
  InputImageContainer,
  ButtonGroup,
} from "./stepAndImage.style";

import UploadImage from "./uploadImage/uploadImage";

export const RecipeStepsAndImage = () => {
  const [steps, setSteps] = useState([{ description: "" }]);

  const handleMultipleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      files.forEach((file) => {
        console.log(file.name); // 파일 이름을 출력하거나 필요한 처리를 수행합니다.
      });
    }
  };

  const addStepHandler = () => {
    setSteps([...steps, { description: "" }]);
  };

  const removeStepHandler = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  return (
    <>
      <Text>요리순서</Text>
      <Text>요리의 순서를 빠짐없이 적어주세요</Text>
      {steps.map((step, index) => (
        <StepsContainer key={index}>
          <Text>Step {index + 1}</Text>
          <IngredientInput
            name="description"
            placeholder="재료 손질 예시"
            value={step.description}
            onChange={(e) => {
              const newSteps = [...steps];
              newSteps[index].description = e.target.value;
              setSteps(newSteps);
            }}
          />
          <UploadImage />
        </StepsContainer>
      ))}
      <ButtonGroup>
        <Button
          type="button"
          onClick={() => removeStepHandler(steps.length - 1)}
        >
          삭제
        </Button>
        <Button type="button" onClick={addStepHandler}>
          추가
        </Button>
      </ButtonGroup>

      <Text>요리 완성 사진</Text>
      <RecipeCompletionImageUpload>
        <InputImageContainer>
          <InputImageLabel htmlFor="file-upload">한번에 업로드</InputImageLabel>
          <InputImage
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleMultipleImageChange}
          />
        </InputImageContainer>
        <UploadImage />
        <UploadImage />
        <UploadImage />
      </RecipeCompletionImageUpload>
    </>
  );
};
