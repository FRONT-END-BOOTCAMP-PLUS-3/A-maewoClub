"use client";

import { useRouter } from "next/navigation";
import {
  FoodImage,
  UserNickname,
  TextContainer,
  Container,
  Description,
  Tier,
  UserContainer,
  UserProfileImage,
} from "./recipeCard.style";
import { TagContainer, Tag } from "../tag/tag.style";

type RecipeCardProps = {
  children: React.ReactNode;
  id: number;
};

const RecipeCard = ({ children, id }: RecipeCardProps) => {
  const router = useRouter();
  const imageUrl = "/recipe.jpg";
  const profileUrl = "/Dfprofile.png";

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
          <Tag key={id}>{id}</Tag>
        </TagContainer>
        <Description>{children}</Description>
        <UserContainer>
          {profileUrl && (
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

export default RecipeCard;
