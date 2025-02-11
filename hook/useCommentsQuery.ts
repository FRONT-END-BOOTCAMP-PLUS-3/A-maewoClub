import { useQuery } from "@tanstack/react-query";
import { RecipeCommentDto } from "@/application/recipe-comment/dto/RecipeCommentDto";

const fetchComments = async (id: number): Promise<RecipeCommentDto[]> => {
  const res = await fetch(`/api/recipe-comments?id=${id}`, { method: "GET" });
  if (!res.ok) throw new Error(`Failed to fetch recipeImages: ${res.status}`);
  console.log("recipe query res 출력: ", res);
  const data: RecipeCommentDto[] = await res.json();

  return data;
};

export const CommentsQuery = (id: number) => {
  return useQuery<RecipeCommentDto[], Error>({
    queryKey: ["comment", id],  
    queryFn: () => fetchComments(id),
    staleTime: 1000 * 60 * 5, 
    retry: false,
  });
};