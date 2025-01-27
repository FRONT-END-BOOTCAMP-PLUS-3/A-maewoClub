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
} from "./recipeCreate.style";
import { useRouter } from "next/navigation";

const RecipeCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const route = useRouter();

  // 제목, 설명 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
  };

  // 재료 입력 핸들러
  const handleIngredientChange = (index: number, field: string, value: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  // 재료 추가
  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  // 재료 삭제
  const removeIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description, ingredients });
    alert("레시피가 업로드 되었습니다 !");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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

      <IngredientsContainer>
        <Text>재료명</Text>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <IngredientInput
              type="text"
              placeholder="재료명"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
            />
            <IngredientInput
              type="text"
              placeholder="분류"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
            />
            <Button type="button" onClick={() => removeIngredient(index)}>
              삭제
            </Button>
          </div>
        ))}
        <Button type="button" onClick={addIngredient}>
          +
        </Button>
      </IngredientsContainer>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Button type="submit">업로드</Button>
        <Button type="button" onClick={() => {alert("돌아갑니다."); route.back()}}>취소</Button>
      </div>
    </FormContainer>
  );
};

export default RecipeCreate;