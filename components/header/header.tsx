"use client";

import React, { useState } from "react";
import {
  HeaderStyle,
  LoginBtnStyle,
  LogoStyle,
  NavStyle,
  LinkStyle,
  LoginStyle,
} from "./header.style";
import { Login } from "../user/login/login";

export const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);

  return (
    <>
      <HeaderStyle>
        <LogoStyle>
          <LinkStyle href="/">logo</LinkStyle>
        </LogoStyle>
        <NavStyle>
          <LinkStyle href="/recipes">레시피</LinkStyle>
          <LinkStyle href="/boards">커뮤니티</LinkStyle>
          <LinkStyle href="/quests">챌린지</LinkStyle>
          <LinkStyle href="/admin">관리자</LinkStyle>
        </NavStyle>
        <LoginStyle>
          <LoginBtnStyle href="#" onClick={(e) => { e.preventDefault(); openLoginModal(); }}>
            Login
          </LoginBtnStyle>
        </LoginStyle>
      </HeaderStyle>

      {showLogin && <Login onClose={closeLoginModal} />}
    </>
  );
};