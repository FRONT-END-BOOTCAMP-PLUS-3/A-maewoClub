export interface RecipeDto {
  id: number;
  userId: number,
  title: string,
  instruction: string,
  tagId: number,
  createdAt: Date,
  updatedAt: Date,
  likeCount:number,
}