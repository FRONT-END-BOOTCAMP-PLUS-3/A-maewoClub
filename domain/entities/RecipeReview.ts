export interface RecipeReview {
  id: number;
  userId: number;
  point: number;
  reviewDescription: string;
  recipeReviewImg: string;
  createdAt: Date;
}
