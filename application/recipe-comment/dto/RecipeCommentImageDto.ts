export interface RecipeCommentImageDto {
    id: number;
    photoUrl: string;
    createdAt: Date;
    updatedAt?: Date;
    userId: string;
}