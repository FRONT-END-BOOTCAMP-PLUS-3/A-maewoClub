export interface RecipeCommentDto {
  id: number;
  recipeId: number;
  userId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  score: number;
}
