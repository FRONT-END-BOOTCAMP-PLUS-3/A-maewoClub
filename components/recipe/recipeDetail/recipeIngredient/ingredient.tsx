import {
  Container,
  IngredientContainer,
  IngredientItem,
  IngredientList,
  Title,
  IngredientName,
  IngredientAmount,
} from "./ingredient.style";

const ingredients = [
  { name: "떡볶이 떡", amount: "50g" },
  { name: "어묵", amount: "100g" },
  { name: "양파", amount: "1개" },
  { name: "대파", amount: "2개" },
  { name: "대파", amount: "2개" },
];
export const Ingredient = () => {
  return (
    <Container>
      <Title>재료</Title>
      <IngredientContainer>
        <IngredientList>
          {ingredients.map((ingredient, index) => (
            <IngredientItem key={index}>
              <IngredientName>{ingredient.name}</IngredientName>
              <IngredientAmount>{ingredient.amount}</IngredientAmount>
            </IngredientItem>
          ))}
        </IngredientList>
      </IngredientContainer>
    </Container>
  );
};
