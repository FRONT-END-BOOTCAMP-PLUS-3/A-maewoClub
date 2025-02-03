export interface RecipeReview {
  id: number;
  recipeId: number;
  userId: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
