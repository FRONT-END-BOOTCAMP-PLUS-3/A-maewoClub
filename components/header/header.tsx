"use client";

import React, { useState } from "react";
import {
  HeaderStyle,
  LoginBtnStyle,
  LogoStyle,
  NavStyle,
  LinkStyle,
  LoginStyle,
  ProfileWrapper,
} from "./header.style";
import { Login } from "../user/login/login";
import { useAuthStore } from "@/store/useAuthStore";
import { UserInfoModal } from "../user/login/userInfoModal/userInfoModal";
import Image from "next/image";

const logo = "/logo.png";

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [showLogin, setShowLogin] = useState(false);
  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);

  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const toggleUserInfoModal = () => {
    setShowUserInfoModal((prev) => !prev);
  };
  const closeUserInfoModal = () => setShowUserInfoModal(false);

  return (
    <>
      <HeaderStyle>
        <LogoStyle>
          <LinkStyle href='/'>
            <Image
              src={logo}
              alt='logo'
              height={150}
              width={150}
            />
          </LinkStyle>
        </LogoStyle>
        <NavStyle>
          <LinkStyle href='/recipes'>레시피</LinkStyle>
          <LinkStyle href='/boards'>커뮤니티</LinkStyle>
          <LinkStyle href='/quests'>챌린지</LinkStyle>
        </NavStyle>
        <LoginStyle>
          {isAuthenticated ? (
            <ProfileWrapper onClick={toggleUserInfoModal}>
              <img
                src={user?.photoUrl}
                alt='profile photo'
              />
            </ProfileWrapper>
          ) : (
            <LoginBtnStyle
              href='#'
              onClick={(e) => {
                e.preventDefault();
                openLoginModal();
              }}
            >
              Login
            </LoginBtnStyle>
          )}
        </LoginStyle>
      </HeaderStyle>

      {showLogin && <Login onClose={closeLoginModal} />}
      {showUserInfoModal && <UserInfoModal onClose={closeUserInfoModal} />}
    </>
  );
};
