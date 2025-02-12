"use client";
import { UserContainer } from "./recipeCard.style";
import { useRouter } from 'next/navigation';
import {
  FoodImage,
  UserNickname,
  TextContainer,
  Container,
  Description,
  Tier,
  UserProfileImage,
  LikeCount,
  LikeContainer
} from "./recipeCardSlide.style";

type RecipeCardProps = {
  id: number,
  children: React.ReactNode;
};

const RecipeCardSlide = ({ children, id }: RecipeCardProps) => {
  const router = useRouter();
  const imageUrl = '/recipe.jpg';
  const profileUrl = '/Dfprofile.png';

  const handleCardClick = () => {
    router.push(`/recipes/${id}`);
  };

  return (
    <Container onClick={handleCardClick}>
       {imageUrl && (
             <FoodImage 
               src={imageUrl} 
               alt="Avatar" 
               width={100} 
               height={100} 
             />
           )}
      <TextContainer>
        <LikeContainer>
          {/* 좋아요순으로 보임 TOP.으로 바꿀거면 10까지 맵돌리면 됨. */}
          <LikeCount>TOP. {id}</LikeCount>
        </LikeContainer>
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
            <Tier>불사조 ⚜️</Tier>
          </UserNickname>
        </UserContainer>
      </TextContainer>
    </Container>
  );
};

export default RecipeCardSlide;