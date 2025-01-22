"use client";


import { HeaderStyle, LogoStyle, NavStyle, LinkStyle, LoginStyle } from "./header.style";

export const Header = () => {
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
        <LinkStyle href="/login">Login</LinkStyle>
      </LoginStyle>
    </HeaderStyle>
  );
};