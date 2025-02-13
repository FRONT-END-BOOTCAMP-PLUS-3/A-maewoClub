"use client";

import React, { useState } from "react";
import {
  Text,
  FormContainer,
  Input,
  TextArea,
  Button,
  IngredientsContainer,
  IngredientInput,
  InputContainer,
  ImageUploadContainer,
  RecipeForm,
  PreviewImage,
  ButtonStyle
} from "./recipeCreate.style";
import { useRouter } from "next/navigation";
import { RecipeStepsAndImage } from "./recipeStepsAndImage";
import UploadImage from "./uploadImage/uploadImage";

type IngredientType = {
  name: string;
  quantity: string;
};

type StepType = {
  description: string;
};

type ImageType = {
  url: string | undefined;
  name: string;
  file: File;
};


const RecipeCreate = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<IngredientType[]>([
    { name: "", quantity: "" }
  ]);
  const [steps, setSteps] = useState<StepType[]>([{ description: "" }]);
  const [uploadedImages, setUploadedImages] = useState<ImageType[]>([]);
  const [image1, setImage1] = useState<File | null>(null);
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("steps", JSON.stringify(steps));

    if (image1) {
      formData.append("image", image1);
    }

    uploadedImages.forEach((img, index) => {
      formData.append(`uploadedImages_${index}`, img.file);
    });
  
    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("레시피 업로드에 실패했습니다.");
      }
  
      alert("레시피가 성공적으로 업로드되었습니다!");
      router.push("/recipes");
    } catch (error) {
      console.error("Error uploading recipe:", error);
      alert("레시피 업로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <RecipeForm>
        <InputContainer>
          <Text>레시피 제목</Text>
          <Input
            type="text"
            name="title"
            placeholder="레시피 제목을 적어주세요"
            value={title}
            onChange={handleInputChange}
          />

          <Text>레시피 한줄 설명</Text>
          <TextArea
            name="description"
            placeholder="레시피의 한줄 설명을 적어주세요"
            value={description}
            onChange={handleInputChange}
          />
        </InputContainer>

        <ImageUploadContainer>
          <UploadImage size={200} onImageUpload={setImage1} />
          {image1 && <PreviewImage>첫 번째 이미지: {image1.name}</PreviewImage>}
        </ImageUploadContainer>
      </RecipeForm>

      <IngredientsContainer>
        <Text>재료명</Text>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <IngredientInput
              type="text"
              placeholder="재료명"
              value={ingredient.name}
              onChange={(e) =>
                setIngredients((prev) => {
                  const newIngredients = [...prev];
                  newIngredients[index].name = e.target.value;
                  return newIngredients;
                })
              }
            />
            <IngredientInput
              type="text"
              placeholder="사용량"
              value={ingredient.quantity}
              onChange={(e) =>
                setIngredients((prev) => {
                  const newIngredients = [...prev];
                  newIngredients[index].quantity = e.target.value;
                  return newIngredients;
                })
              }
            />
            <Button type="button" onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))}>
              삭제
            </Button>
          </div>
        ))}
        <Button type="button" onClick={() => setIngredients([...ingredients, { name: "", quantity: "" }])}>
          추가+
        </Button>
      </IngredientsContainer>

      <RecipeStepsAndImage steps={steps} setSteps={setSteps} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />

      <ButtonStyle>
        <Button type="submit">업로드</Button>
        <Button type="button" onClick={() => router.back()}>취소</Button>
      </ButtonStyle>
    </FormContainer>
  );
};

export default RecipeCreate;