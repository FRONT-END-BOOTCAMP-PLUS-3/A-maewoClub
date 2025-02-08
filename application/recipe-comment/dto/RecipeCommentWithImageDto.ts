export interface RecipeCommentWithImageDto {
    id: number;
    recipeId: number;
    userId: number;
    content: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
    
    imageUrl: string; 
  }