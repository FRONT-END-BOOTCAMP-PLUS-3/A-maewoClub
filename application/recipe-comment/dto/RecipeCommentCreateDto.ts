export interface RecipeCommentCreateDto{
    recipeId: number;
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: null;
    score: number;
    imageUrl?: string;
}