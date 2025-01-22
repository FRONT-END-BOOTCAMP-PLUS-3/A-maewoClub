import React, { ReactNode } from "react";
import { StyledButton, StyledButtonText } from "./button.style";

// Props 타입 정의
interface ButtonProps {
  children: ReactNode; // 버튼 안에 들어갈 텍스트나 내용
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <StyledButton>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
