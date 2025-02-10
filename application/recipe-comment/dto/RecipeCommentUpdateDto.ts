export interface RecipeCommentUpdateDto {
    id: number;
    userId: string;
    content: string;
    updatedAt: Date;
    score: number;
    imageUrl?: string;
}