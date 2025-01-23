"use client";

import React from "react";
import { FooterStyle, HighlightedText } from "./footer.style";

const Footer = () => {
  return (
    <FooterStyle>
      <HighlightedText>고객센터 이용약관 개인정보처리방침</HighlightedText>
      <p>
        아매워클럽 | 사업자정보확인 | 사업자등록번호 : 123-45-06789
        통신판매신고번호 : 1111-서울동대문-1111호
      </p>
      <p>
        고객문의 바로가기 대표메일 : amaewoclub@gmail.com 팀 구성원 : 김주영,
        정현수, 최승원, 한정현
      </p>
      <br />
      <p>Copyright © 주식회사 아매워클럽 All right reserved.</p>
    </FooterStyle>
  );
};

export default Footer;
