'use client'
import {
  Card,
  CardDescription,
  UserName,
  CardTitle,
  FoodImage,
  RecipeUserInfo,
  MainImageWrapper,
  StepImageWrapper,
} from "./recipeUserProfile.style";

export const RecipeUserProfile = () => {
  const imageUrl = '/recipe.jpg'; 

  return (
    <Card>
      <MainImageWrapper>
      {imageUrl && (
        <FoodImage 
          src={imageUrl} 
          alt="Avatar" 
          width={100} 
          height={100} 
        />
      )}
      </MainImageWrapper>
      <StepImageWrapper>
      {imageUrl && (
        <FoodImage 
          src={imageUrl} 
          alt="Avatar" 
          width={100} 
          height={100} 
        />
      )}
      </StepImageWrapper>
      <RecipeUserInfo>
        <UserName>순쾌위파</UserName>
        <CardTitle>순쾌위파 떡볶이 만들기</CardTitle>
        <CardDescription>
          순간의 쾌락을 위해 위장을 파괴해보자!떡볶이와 불닭소스 그리고 청양고추
          순간의 쾌락을 위해 위장을 파괴해보자!떡볶이와 불닭소스 그리고 청양고추
          순간의 쾌락을 위해 위장을 파괴해보자!떡볶이와 불닭소스 그리고 청양고추
          청양고추 순간의 쾌락을 위해 위장을 파괴해보자!떡볶이와 불닭소스 그리고
          청양고추 순간의 쾌락을 위해 위장을 파괴해보자!떡볶이와 불닭소스 그리고
          청양고추 불닭소스 그리고 청양고추 청양고추 순간의 쾌락을 위해 위장을
          파괴해보자!떡볶이와 불닭소스 그리고 청양고추 순간의 쾌락을 위해 위장을
          파괴해보자!떡볶이와 불닭소스 그리고 청양고추 불닭소스 그리고 장을
          파괴해보자!떡볶이와 불닭소스 그리고 청양고추
        </CardDescription>
      </RecipeUserInfo>
    </Card>
  );
};