"use client"
import React, { useState } from 'react'
import { HeaderStyle, LinkStyle, LogoutBtnStyle, LogoutStyle, LogoStyle } from './adminHeader.style';
import { Logout } from '@/components/user/logout/logout';

const AdminHeader = () => {
    const [showLogout, setShowLogout] = useState(false);
  
    const openLogoutModal = () => setShowLogout(true);
    const closeLogoutModal = () => setShowLogout(false);
  return (
     <>
         <HeaderStyle>
           <LogoStyle>
             <LinkStyle href="/">logo</LinkStyle>
           </LogoStyle>
         
           <LogoutStyle>
             <LogoutBtnStyle href="/" onClick={(e) => { e.preventDefault(); openLogoutModal(); }}>
               Logout
             </LogoutBtnStyle>
           </LogoutStyle>
         </HeaderStyle>
   
         {showLogout && <Logout onClose={closeLogoutModal} />}
       </>
  )
}
export default AdminHeader;