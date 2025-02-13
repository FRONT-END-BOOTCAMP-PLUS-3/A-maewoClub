"use client";

import { useState } from "react";
import { CategoryName, ContentInputBox, InputContainer } from "./input.style";

interface ContentInputProps {
  onUpdate: (content: string) => void;
}

const ContentInput = ({ onUpdate }: ContentInputProps) => {
  const [localContent, setLocalContent] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setLocalContent(value);
    onUpdate(value);
  };

  return (
    <>
      <InputContainer>
        <CategoryName>내용</CategoryName>
        <ContentInputBox
          value={localContent}
          onChange={handleChange}
        />
      </InputContainer>
    </>
  );
};

export default ContentInput;
