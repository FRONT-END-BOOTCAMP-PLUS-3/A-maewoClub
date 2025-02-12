import { RecipeDto } from "@/application/recipe/dto/RecipeDto";
import { useQuery } from "@tanstack/react-query";

const fetchRecipe = async (id: number): Promise<RecipeDto> => {
  const res = await fetch(`/api/recipes?id=${id}`, { method: "GET" });
  if (!res.ok) throw new Error(`Failed to fetch recipe: ${res.status}`);
  console.log("recipe query res 출력: ", res);
  const data: RecipeDto = await res.json();

  return data;
};

export const RecipeQuery = (id: number) => {
  return useQuery<RecipeDto, Error>({
    queryKey: ["recipe", id],  
    queryFn: () => fetchRecipe(id),
    staleTime: 1000 * 60 * 5, 
    retry: false,
  });
};
