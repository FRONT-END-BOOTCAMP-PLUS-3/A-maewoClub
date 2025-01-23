import styled from "styled-components";
import Image from "next/image";

export const FoodImage = styled(Image)`
  width:215px; 
`

export const Container = styled.div`
  background: #8888;
  width: 200px; 
`

export const TagContainer = styled.div`
  background: #777;
  width:100%
`

export const Tag = styled.span`
  background: #666;

`

export const TextContainer = styled.div`
  padding: 10px 20px;
  background-color: #777;
`

export const Description = styled.p`
font-size: 14px;
`

export const UserNickname = styled.h4`
  font-size: 14px;
`

export const Tier = styled.span`
  font-size: 10px
`
