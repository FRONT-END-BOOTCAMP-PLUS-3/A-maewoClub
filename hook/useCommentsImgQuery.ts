import { useQuery } from "@tanstack/react-query";
import { RecipeCommentImageDto } from "@/application/recipe-comment/dto/RecipeCommentImageDto";

// const fetchCommentImages = async (id: number): Promise<RecipeCommentImageDto[]> => {
//   const res = await fetch(`/api/recipe-comment-images?id=${id}`, { method: "GET" });
//   if (!res.ok) throw new Error(`Failed to fetch recipeImages: ${res.status}`);
//   console.log("recipe query res 출력: ", res);
//   const data: RecipeCommentImageDto[] = await res.json();

//   return data;
// };

export const CommentImageQuery = (id: number) => {
  return useQuery<RecipeCommentImageDto[], Error>({
    queryKey: ['commentImage', id],  
    queryFn: () => fetchCommentImages(id),
    staleTime: 1000 * 60 * 5, 
    retry: false,
  });
};