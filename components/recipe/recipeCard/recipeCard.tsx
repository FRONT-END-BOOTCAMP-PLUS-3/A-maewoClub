'use client'

import { FoodImage, UserNickname, TextContainer, Container, Description, Tier, Tag, UserContainer,TagContainer, UserProfileImage } from "./recipeCard.style";

type RecipeCardProps = {
  children: React.ReactNode;
}

const RecipeCard = ({children}: RecipeCardProps) => {
  const imageUrl = '/recipe.jpg'; 
  const profileUrl = '/Dfprofile.png'
  const tag = '#매운 음식 1단계';

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
        <Description>{children}</Description>
        <UserContainer>
        {imageUrl && (
        <UserProfileImage
          src={profileUrl} 
          alt="Avatar" 
          width={100} 
          height={100} 
        />
      )}
        <UserNickname>
          나의 고향 신길동 매운 떡볶이 
          <Tier>알</Tier>
        </UserNickname>
        </UserContainer>
      </TextContainer>
    </Container>
  )
};

export default RecipeCard;