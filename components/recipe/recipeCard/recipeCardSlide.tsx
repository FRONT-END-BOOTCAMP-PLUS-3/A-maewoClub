'use client'
import { FoodImage ,UserNickname, TextContainer, Container, Description, Tier } from "./recipeCardSlide.style";


const SlideTrack = () => {
  return (
    <Container>
      <FoodImage src="/" alt="Avatar" width={100} height={100} />
      <TextContainer>
        <Description>아주 맛있고 담백하고 아주 좋고 빨갛고 매워요</Description>
        <UserNickname>
          나의 고향 신길동 매운 떡볶이 
          <Tier>알</Tier>
        </UserNickname>
      </TextContainer>
    </Container>
  )
};

export default SlideTrack;
