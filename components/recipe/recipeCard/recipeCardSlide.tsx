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
  UserProfileImage
} from "./recipeCardSlide.style";

type RecipeCardProps = {
  children: React.ReactNode;
  id: string;
};

const RecipeCardSlide = ({ children, id }: RecipeCardProps) => {
  const router = useRouter();
  const imageUrl = '/recipe.jpg'; 
  const profileUrl = '/Dfprofile.png'

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
  );
};

export default RecipeCardSlide;
