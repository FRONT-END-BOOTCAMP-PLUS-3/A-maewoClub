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

const RecipeCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const route = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
  };

  // 재료 입력 핸들러 -> type error 수정
  const handleIngredientChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const removeIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description, ingredients });
    alert("레시피가 업로드 되었습니다 !");
  };

  const [image1, setImage1] = useState<File | null>(null);

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
      <UploadImage size={200} onImageUpload={setImage1} ></UploadImage>

      {image1 && <PreviewImage>첫 번째 이미지: {image1.name}</PreviewImage>}

      </ImageUploadContainer>
      </RecipeForm>

      <IngredientsContainer>
        <Text>재료명</Text>
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <IngredientInput
              type="text"
              placeholder="재료명"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <IngredientInput
              type="text"
              placeholder="사용량"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
            <Button type="button" onClick={() => removeIngredient(index)}>
              삭제
            </Button>
          </div>
        ))}
        <Button type="button" onClick={addIngredient}>
          추가+
        </Button>
      </IngredientsContainer>

      <RecipeStepsAndImage></RecipeStepsAndImage>

      <ButtonStyle>
        <Button type="submit">업로드</Button>
        <Button
          type="button"
          onClick={() => {
            alert("돌아갑니다.");
            route.back();
          }}
        >
          취소
        </Button>
      </ButtonStyle>
    </FormContainer>
  );
};

export default RecipeCreate;
