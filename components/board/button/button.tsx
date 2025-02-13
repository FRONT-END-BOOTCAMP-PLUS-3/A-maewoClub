"use client";
import React from "react";
import { StyledButton, StyledButtonText } from "./button.style";

// Props 타입 정의
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export type { ButtonProps };
export default Button;
