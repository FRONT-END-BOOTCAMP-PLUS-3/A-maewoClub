"use client";

import { Text, Button, IngredientInput, InputContainer } from "./recipeCreate.style";
import {
  StepsContainer,
  RecipeCompletionImageUpload,
  HiddenInput,
  ImageNameItem,
  RemoveButton,
  ImagePreviewContainer,
  ImagePreview,
  InputImageLabel,
} from "./recipeStepAndImage.style";

import UploadImage from "./uploadImage/uploadImage";

type ImageType = {
  url: string | undefined;
  name: string;
  file: File;
};

type StepType = {
  description: string;
};

type RecipeStepsAndImageProps = {
  steps: StepType[];
  setSteps: React.Dispatch<React.SetStateAction<StepType[]>>;
  uploadedImages: ImageType[];
  setUploadedImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
};

export const RecipeStepsAndImage = ({
  steps,
  setSteps,
  uploadedImages,
  setUploadedImages,
}: RecipeStepsAndImageProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map((file) => ({
        name: file.name,
        file: file,
        url: URL.createObjectURL(file), 
      }));

      setUploadedImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <Text>요리순서</Text>
      <Text>요리의 순서를 빠짐없이 적어주세요</Text>
      {steps.map((step, index) => (
        <StepsContainer key={index}>
          <Text>Step {index + 1}</Text>
          <IngredientInput
            value={step.description}
            placeholder="재료 손질 예시"
            onChange={(e) => {
              setSteps((prev) => {
                const newSteps = [...prev];
                newSteps[index].description = e.target.value;
                return newSteps;
              });
            }}
          />
          <UploadImage />
        </StepsContainer>
      ))}
      <Button onClick={() => setSteps([...steps, { description: "" }])}>
        추가
      </Button>

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