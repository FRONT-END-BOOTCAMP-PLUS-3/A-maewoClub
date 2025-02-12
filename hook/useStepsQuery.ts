import { RecipeStepDto } from "@/application/recipe/dto/RecipeStepDto";
import { useQuery } from "@tanstack/react-query";

const fetchSteps = async (id: number): Promise<RecipeStepDto[]> => {
  const res = await fetch(`/api/recipe-steps/id=${id}`, { method: "GET" });
  if (!res.ok) throw new Error(`Failed to fetch recipeSteps: ${res.status}`);
  console.log("recipe query res 출력: ", res);
  const data: RecipeStepDto[] = await res.json();

  return data;
};

export const StepsQuery = (id: number) => {
  return useQuery<RecipeStepDto[], Error>({
    queryKey: ['recipeStep', id],  
    queryFn: () => fetchSteps(id),
    staleTime: 1000 * 60 * 5, 
    retry: false,
  });
};
