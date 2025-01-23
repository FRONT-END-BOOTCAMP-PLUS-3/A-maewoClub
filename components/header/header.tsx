"use client";

import { HeaderStyle, LoginBtnStyle, LogoStyle, NavStyle, LinkStyle, LoginStyle } from "./header.style";

export const Header = () => {
  const loginModal = () => {
    console.log("loginModal")
    alert("login Modal")
  }

  return (
    <HeaderStyle>
      <LogoStyle>
        <LinkStyle href="/">logo</LinkStyle>
      </LogoStyle>
      <NavStyle>
        <LinkStyle href="/recipes">레시피</LinkStyle>
        <LinkStyle href="/board">커뮤니티</LinkStyle>
        <LinkStyle href="/quest">챌린지</LinkStyle>
      </NavStyle>
      <LoginStyle>
        <LoginBtnStyle href="/" onClick={loginModal}>Login</LoginBtnStyle>
      </LoginStyle>
    </HeaderStyle>
  );
};