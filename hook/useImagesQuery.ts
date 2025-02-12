import { useQuery } from "@tanstack/react-query";
import { RecipeImageDto } from "@/application/recipe/dto/RecipeImageDto";

// const fetchImages = async (id: number): Promise<RecipeImageDto[]> => {
//   const res = await fetch(`/api/recipe-images?id=${id}`, { method: "GET" });
//   if (!res.ok) throw new Error(`Failed to fetch recipeImages: ${res.status}`);
//   console.log("recipe query res 출력: ", res);
//   const data: RecipeImageDto[] = await res.json();

//   return data;
// };

export const RecipeImagesQuery = (id: number) => {
  return useQuery<RecipeImageDto[], Error>({
    queryKey: ['images', id],  
    queryFn: () => fetchImages(id),
    staleTime: 1000 * 60 * 5, 
    retry: false,
  });
};