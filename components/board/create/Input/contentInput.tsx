"use client";

import { CategoryName, ContentInputBox, InputContainer } from "./input.style";

const ContentInput = () => {
  return (
    <>
      <InputContainer>
        <CategoryName>내용</CategoryName>
        <ContentInputBox />
      </InputContainer>
    </>
  );
};

export default ContentInput;
