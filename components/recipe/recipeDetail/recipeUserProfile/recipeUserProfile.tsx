"use client";

import { useState, useEffect } from "react";
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
import { UserDto } from "@/application/users/dto/UserDto";
import { RecipeImageDto } from "@/application/recipe/dto/RecipeImageDto";

type UserProfileProps = {
  id: number;
};

export const RecipeUserProfile = ({ id }: UserProfileProps) => {
  const [recipe, setRecipe] = useState<RecipeImageDto | null>(null);
  const [user, setUser] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchRecipe = async () => {
      try {
        const res = await fetch(`/api/recipes/id?=${id}`);
        if (!res.ok) throw new Error(`Failed to fetch recipe: ${res.status}`);
        const data: RecipeImageDto = await res.json();
        setRecipe(data);

        return data.userId;
      } catch (err) {
        setError((err as Error).message);
        return null;
      }
    };

    const fetchUser = async (userId: number) => {
      try {
        const res = await fetch(`/api/users?id=${userId}`);
        if (!res.ok) throw new Error(`Failed to fetch user: ${res.status}`);
        const data: UserDto = await res.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchRecipe().then((userId) => {
      if (userId) fetchUser(userId);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생: {error}</div>;
  if (!recipe || !user) return <div>레시피 또는 사용자 정보를 찾을 수 없습니다.</div>;

  return (
    <ProfileContainer>
      <MainImageWrapper>
        {recipe. && (
          <ThumbnailImage
            src={recipe.thumbnailImage}
            alt="Thumbnail Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        )}
      </MainImageWrapper>
      <StepImageWrapper>
        {user.profileImage && (
          <ProfileImage src={user.profileImage} alt="User Avatar" fill sizes="5rem" />
        )}
      </StepImageWrapper>
      <RecipeUserInfo>
        <UserName>{user.name}</UserName>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
      </RecipeUserInfo>
    </ProfileContainer>
  );
};