'use client';

import { useRouter } from 'next/navigation';
import {
  FoodImage,
  UserNickname,
  TextContainer,
  Container,
  Description,
  Tier,
  UserContainer,
  UserProfileImage,
} from './recipeCard.style';
import { Tag, TagContainer } from '../tag/tag.style';

type RecipeCardProps = {
  children: React.ReactNode;
  id: string;
};

const RecipeCard = ({ children, id }: RecipeCardProps) => {
  const router = useRouter();
  const imageUrl = '/recipe.jpg';
  const profileUrl = '/Dfprofile.png';
  const tag = '#매운 음식 1단계';

  const handleCardClick = () => {
    router.push(`/recipes/${id}`);
  };

  return (
    <Container onClick={handleCardClick}>
      {imageUrl && (
        <FoodImage src={imageUrl} alt="Avatar" width={100} height={100} />
      )}
      <TextContainer>
        <TagContainer>
          {/* -- 해당 태그만 가져오는 로직 넣을 것 -- */}
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
  );
};

export default RecipeCard;