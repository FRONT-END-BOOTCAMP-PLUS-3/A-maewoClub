import React from "react";
import { footerStyle, headerStyle } from "./footer.style";

const Footer = () => {
  return (
    <>
      <div className={footerStyle}>
        <p>&copy; 2023 A-maewo Club. All rights reserved.</p>
        <p>
          고객센터 | 이용약관 | 개인정보처리방침 | 아매워클럽 | 사업자정보확인
        </p>
        <p>사업자등록번호 : 123-45-06789</p>
        <p>통신판매신고번호 : 1111-서울동대문-1111호</p>
        <p>고객문의 바로가기</p>
        <p>대표메일 : amaewoclub@gmail.com</p>
        <p>팀 구성원 : 김주영, 정현수, 최승원, 한정현</p>
        <p>Copyright © 주식회사 아매워클럽 All right reserved.</p>
      </div>
      <div className={headerStyle}></div>
    </>
  );
};

export default Footer;
