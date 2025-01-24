import styled from "styled-components";
import Image from "next/image";

export const FoodImage = styled(Image)`
  width: 215px; 
  height: auto;
  object-fit: container;
`

export const Container = styled.div`
  background: #fff;
  width: 200px; 
  border: 1px solid #000;
  height: auto;
  border-radius: 20px;
  overflow:hidden;
`

export const TagContainer = styled.div`
  background: #fff;
  width:100%
`

export const Tag = styled.span`
  background: red;
  padding: 2px 10px;
  font-size: 12px;
  border-radius: 30px;
  display: inline-block;

`

export const TextContainer = styled.div`
  padding: 5px 10px;
  background-color: #fff;
`

export const Description = styled.p`
font-size: 20px;
font-weight: bold
`
export const UserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
`
export const UserProfileImage = styled(Image)`
  width:50px;
  height:auto;
`
export const UserNickname = styled.h4`
  width: 65%;
  font-size: 15px;
`

export const Tier = styled.p`
  font-size: 10px;
  padding: 4px 5px;
  display: inline-block;
  background-color: gold;
  border-radius: 10px
`