import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { useQuery } from "@tanstack/react-query";

export async function fetchRecipe(): Promise<RecipeDto | null> {
  const response = await fetch(`/api/recipes`, {
    method: "GET"
  });

  const data: RecipeDto = await response.json();
  if (!response.ok) {
    return null;
  }

  return data;
}

export function useRecipes() {
  return useQuery({
    queryKey: ["id"],
    queryFn: fetchRecipe,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}
