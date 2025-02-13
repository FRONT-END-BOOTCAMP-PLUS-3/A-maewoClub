"use client";
import React, { useState } from "react";
import {
  HeaderStyle,
  LinkStyle,
  LogoutBtnStyle,
  LogoutStyle,
  LogoStyle,
  NavStyle,
} from "./adminHeader.style";
import { Logout } from "@/components/user/logout/logout";
import Image from "next/image";

const logo = "/logo.png";

const AdminHeader = () => {
  const [showLogout, setShowLogout] = useState(false);

  const openLogoutModal = () => setShowLogout(true);
  const closeLogoutModal = () => setShowLogout(false);
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
        <LogoutStyle>
          <LogoutBtnStyle
            href='/'
            onClick={(e) => {
              e.preventDefault();
              openLogoutModal();
            }}
          >
            Logout
          </LogoutBtnStyle>
        </LogoutStyle>
      </HeaderStyle>

      {showLogout && <Logout onClose={closeLogoutModal} />}
    </>
  );
};
export default AdminHeader;
