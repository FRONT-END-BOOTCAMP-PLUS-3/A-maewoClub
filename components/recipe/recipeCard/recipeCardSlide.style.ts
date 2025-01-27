import styled from "styled-components";
import Image from "next/image";

export const FoodImage = styled(Image)`
  width:215px; 
  height: auto;
  object-fit: container;
`

export const Container = styled.div`
  background: #fff;
  border: 1px solid #000;
  height: auto;
  border-radius: 20px;
  overflow:hidden;
  cursor: pointer;
`
export const TextContainer = styled.div`
  padding: 0px 10px;
  background-color: #fff;
`
export const Description = styled.p`
font-size: 25px;
font-weight: bold
`
export const UserContainer = styled.div`
  padding: 10px 0px;
  width: 100px;
`
export const UserProfileImage = styled(Image)`
  width:40px;
  height:auto;
`
export const UserNickname = styled.h4`
  font-size: 12px;
  margin-bottom:10px;
`

export const Tier = styled.p`
  font-size: 10px;
  padding: 4px 5px;
  width: 20px;
  background-color: gold;
  border-radius: 10px

`