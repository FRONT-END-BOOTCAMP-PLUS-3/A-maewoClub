export interface RecipeCommentCreateDto{
    recipeId: number;
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    score: number;
    imageUrl?: string;
}