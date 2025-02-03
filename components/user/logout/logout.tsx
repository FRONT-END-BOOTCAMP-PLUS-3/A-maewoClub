"use client";

import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseButton,
  LogoutBtn,
} from "./logout.style";
import { useRouter } from "next/navigation";

type LoginModalProps = {
  onClose: () => void;
};

export const Logout = ({ onClose }: LoginModalProps) => {

  const router = useRouter();
  return (
    <>
      <ModalContainer>
        <h2>로그아웃하고 처음으로 돌아갑니다.</h2>
        <LogoutBtn onClick={() => {router.push("/")}}>로그아웃</LogoutBtn>
        <ModalCloseButton onClick={onClose}>닫기</ModalCloseButton>
      </ModalContainer>
      <ModalOverlay onClick={onClose} />
    </>
  );
};