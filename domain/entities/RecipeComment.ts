export interface RecipeComment {
  id: number;
  recipeId: number;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  score: number;

  img?: string;
}
