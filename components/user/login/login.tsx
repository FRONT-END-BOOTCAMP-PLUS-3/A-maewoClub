"use client";

import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseButton,
  LoginBox,
  SocialName,
} from "./login.style";
import { RiKakaoTalkFill } from "react-icons/ri";
import LoginForm from "./loginBox/loginForm";
import Image from "next/image";

type LoginModalProps = {
  onClose: () => void;
};

const googleLogin = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/auth`;

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20profile%20email`;

  window.location.href = authUrl;
  localStorage.setItem("provider", "google");
};

const KakaoLogin = () => {
  const restApi = process.env.NEXT_PUBLIC_KAKAO_REST_API;
  const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/auth`;

  const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApi}&redirect_uri=${redirectUri}&response_type=code`;

  window.location.href = authUrl;
  localStorage.setItem("provider", "kakao");
};

export const Login = ({ onClose }: LoginModalProps) => {
  return (
    <>
      <ModalContainer>
        <h2>로그인 / 회원가입</h2>
        <LoginForm />
        <LoginBox
          style={{ backgroundColor: "#FEE500" }}
          onClick={KakaoLogin}
        >
          <RiKakaoTalkFill style={{ fontSize: "24px" }} />
          <SocialName>카카오로 시작하기</SocialName>
        </LoginBox>
        <LoginBox
          style={{ boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)" }}
          onClick={googleLogin}
        >
          <Image
            width={26}
            height={26}
            src='/google_logo.svg'
            alt='google logo'
          />
          <SocialName>구글로 시작하기</SocialName>
        </LoginBox>
        <ModalCloseButton onClick={onClose}>닫기</ModalCloseButton>
      </ModalContainer>
      <ModalOverlay onClick={onClose} />
    </>
  );
};
