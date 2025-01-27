"use client";

import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseButton,
} from "./login.style";

type LoginModalProps = {
  onClose: () => void;
};

export const Login = ({ onClose }: LoginModalProps) => {
  return (
    <>
      <ModalContainer>
        <h2>로그인 / 회원가입</h2>
        <p>여기부분에 소셜 로그인 넣을것임.</p>
        <ModalCloseButton onClick={onClose}>닫기</ModalCloseButton>
      </ModalContainer>
      <ModalOverlay onClick={onClose} />
    </>
  );
};