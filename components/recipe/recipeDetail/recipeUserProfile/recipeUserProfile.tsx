"use client";
import {
  ProfileContainer,
  CardDescription,
  UserName,
  CardTitle,
  FoodImage,
  RecipeUserInfo,
  MainImageWrapper,
  StepImageWrapper,
} from "./recipeUserProfile.style";

export const RecipeUserProfile = () => {
  const imageUrl = "/recipe.jpg";
  const profileUrl = "/Dfprofile.png";
  const userName = "순대위장";
  const cardTitle = "순쾌위파 떡볶이 만들기";
  const userDescription =
    "순간의 쾌락을 위해 위장을 파괴해보자! 떡볶이와 불닭소스 그리고 청양닭소스 그리고 청양고닭소스 그리고 청양고고추";

  return (
    <ProfileContainer>
      <MainImageWrapper>
        {imageUrl && (
          <FoodImage src={imageUrl} alt="image" width={100} height={100} />
        )}
      </MainImageWrapper>
      <StepImageWrapper>
        {profileUrl && (
          <FoodImage src={profileUrl} alt="Avatar" width={100} height={100} />
        )}
      </StepImageWrapper>
      <RecipeUserInfo>
        <UserName>{userName}</UserName>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{userDescription}</CardDescription>
      </RecipeUserInfo>
    </ProfileContainer>
  );
};
