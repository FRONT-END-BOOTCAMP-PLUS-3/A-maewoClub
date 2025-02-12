// import { useEffect } from "react";
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

type IngredientProps = {
  id: number;
}

export const Ingredient = ({id}: IngredientProps) => {
  
 useEffect(() => {
   
 },[])

  return (
    <Container>
      <Title>재료</Title>
      <IngredientContainer>
        <IngredientList>
          {ingredients.map((ingredient) => (
            <IngredientItem key={id}> 
              <IngredientName>{ingredient.ingredientName}</IngredientName>
              <IngredientAmount>{ingredient.ingredientAmount}</IngredientAmount>
            </IngredientItem>
          ))}
        </IngredientList>
      </IngredientContainer>
    </Container>
  );
};
