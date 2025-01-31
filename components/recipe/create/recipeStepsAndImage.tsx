"use client";

import { useState } from "react";
import { Text, Button, IngredientInput } from "./recipeCreate.style";
import {
  StepsContainer,
  RecipeCompletionImageUpload,
  InputImageLabel,
  InputContainer,
  ButtonGroup,
  ImageNameList,
  HiddenInput,
  ImageNameItem,
  RemoveButton,
  ImagePreview,
  ImagePreviewContainer,
} from "./recipeStepAndImage.style";

import UploadImage from "./uploadImage/uploadImage";

export const RecipeStepsAndImage = () => {
  const [steps, setSteps] = useState([{ description: "" }]);

  const [uploadedImages, setUploadedImages] = useState<
    { name: string; url: string }[]
  >([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
         // 미리보기용 URL 생성
      }));

      setUploadedImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
        <InputContainer>
          <InputImageLabel htmlFor="file-upload">이미지 업로드</InputImageLabel>
          <HiddenInput
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </InputContainer>
        <ImagePreviewContainer>
        {uploadedImages.map((image, index) => (
          <div key={index}>
            <ImagePreview src={image.url} alt={image.name} />
            <ImageNameItem>
              <RemoveButton onClick={() => handleRemoveImage(index)}>
                x
              </RemoveButton>
              {image.name}
            </ImageNameItem>
          </div>
        ))}
        </ImagePreviewContainer>
      </RecipeCompletionImageUpload>

    </>
  );
};
