import { useEffect } from "react";
import {
  Container,
  IngredientContainer,
  IngredientItem,
  IngredientList,
  Title,
  IngredientName,
  IngredientAmount,
} from "./ingredient.style";
import { useRecipeStore } from "@/store/useRecipeStore";
import { RecipeIngredientDto } from "@/application/recipe/dto/RecipeIngredientDto";

type IngredientProps = {
  id: number;
  ingredients: RecipeIngredientDto[];
}

export const Ingredient = ({id, ingredients}: IngredientProps) => {
  
  const {fetchRecipeData} = useRecipeStore();
  useEffect(()=>{
    fetchRecipeData(id);
    console.log("fetchRecipeData부분 ingredients data 확인용", fetchRecipeData);
  }, [id, fetchRecipeData]);

  return (
    <Container>
      <Title>재료</Title>
      <IngredientContainer>
        <IngredientList>
          {ingredients.map((ingredient) => (
            <IngredientItem key={ingredient.id}>
              <IngredientName>{ingredient.ingredientName}</IngredientName>
              <IngredientAmount>{ingredient.ingredientAmount}</IngredientAmount>
            </IngredientItem>
          ))}
        </IngredientList>
      </IngredientContainer>
    </Container>
  );
};
