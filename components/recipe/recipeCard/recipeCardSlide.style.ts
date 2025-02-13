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
  width: 200px;
`
export const TextContainer = styled.div`
  padding: 10px 10px;
  background-color: #fff;
`
export const LikeContainer = styled.p`
  margin: 10px 0;
  
`
export const LikeCount = styled.span`
  padding: 10px 10px;
  background-color: var(--mainRed);
  color:#fff;
  border-radius: 10px;
`
export const Description = styled.p`
  font-size: 20px;
  font-weight: bold;
`
export const UserContainer = styled.div`
  padding: 10px 0px;
  width: 100px;
`
export const UserProfileImage = styled(Image)`
  width:40px;
  height:40px;
`
export const UserNickname = styled.h4`
  font-size: 12px;
  margin: 0 0 0 20px;
`
export const Title = styled.h2`
  font-size: 20px;
  margin-bottom:5px;
  height: auto;
`

export const Tier = styled.span`
  font-size: 10px;
  padding: 6px 10px;
  background-color: gold;
  border-radius: 10px;
  margin: 5px 10px;
`