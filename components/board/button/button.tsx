"use client";
import React, { ReactNode } from "react";
import { StyledButton, StyledButtonText } from "./button.style";

// Props 타입 정의
interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <StyledButton>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
