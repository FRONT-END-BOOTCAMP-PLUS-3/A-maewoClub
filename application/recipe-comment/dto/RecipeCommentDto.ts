export interface RecipeCommentDto {
  id: number;
  recipeId: number;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  score: number;
}
