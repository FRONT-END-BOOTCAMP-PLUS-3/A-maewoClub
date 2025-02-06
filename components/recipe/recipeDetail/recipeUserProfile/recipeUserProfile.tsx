"use client";
import {
  ProfileContainer,
  CardDescription,
  UserName,
  CardTitle,
  RecipeUserInfo,
  MainImageWrapper,
  StepImageWrapper,
  ThumbnailImage,
  ProfileImage,
} from "./recipeUserProfile.style";

export const RecipeUserProfile = () => {
  const thumbnailImage = "/recipe.jpg";
  const profileImage = "/Dfprofile.png";
  const userName = "순대위장";
  const cardTitle = "순쾌위파 떡볶이 만들기";
  const userDescription =
    "순간의 쾌락을 위해 위장을 파괴해보자! 떡볶이와 불닭소스 그리고 청양닭소스 그리고 청양고닭소스 그리고 청양고고추";
  

  return (
    <ProfileContainer>
      <MainImageWrapper>
        {thumbnailImage && (
          <ThumbnailImage
            src={thumbnailImage}
            alt="Thumbnail Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        )}
      </MainImageWrapper>
      <StepImageWrapper>
        {profileImage && (
          <ProfileImage src={profileImage} alt="Avatar" fill sizes="5rem" />
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
