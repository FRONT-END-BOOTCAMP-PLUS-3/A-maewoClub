"use client";

import { CategoryName, InputContainer, TitleInputBox } from "./input.style";

const TitleInput = () => {
  return (
    <>
      <InputContainer>
        <CategoryName>제목</CategoryName>
        <TitleInputBox />
      </InputContainer>
    </>
  );
};

export default TitleInput;
