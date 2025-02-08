export interface RecipeCommentWithImageDto {
    id: number;
    recipeId: number;
    userId: string;
    content: string;
    score: number;
    createdAt: Date;
    updatedAt: Date;
    
    imageUrl: string; 
  }