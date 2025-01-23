'use client'

import { FoodImage, UserNickname, TextContainer, Container, Description, Tier, Tag, TagContainer } from "./recipeCard.style";

const RecipeCardSlide = () => {
  // 이미지 URL 변수 추가
  const imageUrl = '/your-image-path.jpg'; // 실제 이미지 경로로 대체
  const tag = '음식 태그'; // 태그 변수 추가

  return (
    <Container>
      {imageUrl && (
        <FoodImage 
          src={imageUrl} 
          alt="Avatar" 
          width={100} 
          height={100} 
        />
      )}
      <TextContainer>
        <TagContainer>
          <Tag>{tag}</Tag>
        </TagContainer>
        <Description>아주 맛있고 담백하고 아주 좋고 빨갛고 매워요</Description>
        <UserNickname>
          나의 고향 신길동 매운 떡볶이 
          <Tier>알</Tier>
        </UserNickname>
      </TextContainer>
    </Container>
  )
};

export default RecipeCardSlide;