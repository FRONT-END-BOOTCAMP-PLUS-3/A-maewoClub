import { RecipeIngredientDto } from "@/application/recipe/dto/RecipeIngredientDto";
import { useQuery } from "@tanstack/react-query";

// const fetchIngredients = async (id: number): Promise<RecipeIngredientDto[]> => {
//   const res = await fetch(`/api/recipe-ingredients?id=${id}`, { method: "GET" });
//   if (!res.ok) throw new Error(`Failed to fetch recipeSteps: ${res.status}`);
//   console.log("recipe query res 출력: ", res);
//   const data: RecipeIngredientDto[] = await res.json();

//   return data;
// };

export const IngredientsQuery = (id: number) => {
  return useQuery<RecipeIngredientDto[], Error>({
    queryKey: ['ingredient', id],  
    queryFn: () => fetchIngredients(id),
    staleTime: 1000 * 60 * 5, 
    retry: false,
  });
};