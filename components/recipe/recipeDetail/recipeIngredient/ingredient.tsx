import { useEffect, useState } from "react";
import {
  Container,
  IngredientContainer,
  IngredientItem,
  IngredientList,
  Title,
  IngredientName,
  IngredientAmount,
} from "./ingredient.style";
import { RecipeIngredientDto } from "@/application/recipe/dto/RecipeIngredientDto";

type IngredientProps = {
  id: number;
}

export const Ingredient = ({id}: IngredientProps) => {
  
const [ingredients, setIngredient] = useState<RecipeIngredientDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchIngredients = async () => {
      try {
        const res = await fetch(`/api/recipe-ingredients?id=${id}`);
        if (!res.ok) throw new Error(`Failed to fetch steps: ${res.status}`);
        const data = await res.json();
        console.log("data recipe step 확인용", data);
        setIngredient(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIngredients();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생: {error}</div>;
  if (ingredients.length === 0) return <div>조리재료가 없습니다.</div>;

  return (
    <Container>
      <Title>재료</Title>
      <IngredientContainer>
        <IngredientList>
          {ingredients.map((ingredient) => (
            <IngredientItem key={ingredient.recipeId}> 
              <IngredientName>{ingredient.ingredientName}</IngredientName>
              <IngredientAmount>{ingredient.ingredientAmount}</IngredientAmount>
            </IngredientItem>
          ))}
        </IngredientList>
      </IngredientContainer>
    </Container>
  );
};
