"use client";

import { useState } from "react";
import { CategoryName, InputContainer, TitleInputBox } from "./input.style";

interface TitleInputProps {
  onUpdate: (title: string) => void;
}

const TitleInput = ({ onUpdate }: TitleInputProps) => {
  const [localTitle, setLocalTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalTitle(value);
    onUpdate(value);
  };

  return (
    <>
      <InputContainer>
        <CategoryName>제목</CategoryName>
        <TitleInputBox
          type='text'
          value={localTitle}
          onChange={handleChange}
        />
      </InputContainer>
    </>
  );
};

export default TitleInput;
