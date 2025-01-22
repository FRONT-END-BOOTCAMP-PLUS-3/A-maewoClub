import styled from "styled-components";
import Link from "next/link";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #0c0c0c;
`;

export const LogoStyle = styled.h1`
  // background: red;
  margin-right: 20px;
  padding: 5px;
  font-size: 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  flex-grow: 1;
`;

export const LinkStyle = styled(Link)`
  display: inline-block;
  //color: #fff;
  padding: 5px 10px;
  margin: 5px;
  text-decoration: none;
  border-radius: 5px;
  color: #e50914;
  &:hover {
    background: darkgray;
    color: white;
  }
`;

export const LoginStyle = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
