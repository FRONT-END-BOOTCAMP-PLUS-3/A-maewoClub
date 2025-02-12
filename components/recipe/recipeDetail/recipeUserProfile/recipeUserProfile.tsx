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
import { RecipeDetailDto } from "@/application/recipe/dto/RecipeDetailDto";

type UserProfileProps = {
  id: number;
};

export const RecipeUserProfile = ({ id }: UserProfileProps) => {
  const [recipe, setRecipe] = useState<RecipeDetailDto | null>(null);
  const [user, setUser] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchRecipe = async () => {
      try {
        const res = await fetch(`/api/recipes/detail?id=${id}`);
        if (!res.ok) throw new Error(`Failed to fetch recipe: ${res.status}`);
        const data: RecipeDetailDto = await res.json();
        setRecipe(data);

        return data.recipes;
      } catch (err) {
        setError((err as Error).message);
        return null;
      }
    };

    const fetchUser = async (userId: string) => {
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
      if (userId) fetchUser("userId");
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생: {error}</div>;
  if (!recipe || !user) return <div>레시피 또는 사용자 정보를 찾을 수 없습니다.</div>;

  return (
    <ProfileContainer>
      <MainImageWrapper>
        {recipe.images.map((image)=> 
        <div key={image.id}>
          <ThumbnailImage
            src={image.photoUrl}
            alt="Thumbnail Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        )}
        
      </MainImageWrapper>
      <StepImageWrapper>
        {user.photoUrl && (
          <ProfileImage src={user.photoUrl} alt="User Avatar" fill sizes="5rem" />
        )}
      </StepImageWrapper>
      <RecipeUserInfo>
        <UserName>{user.nickname}</UserName>
        <CardTitle>{recipe.recipes.title}</CardTitle>
        <CardDescription>{recipe.recipes.description}</CardDescription>
      </RecipeUserInfo>
    </ProfileContainer>
  );
};