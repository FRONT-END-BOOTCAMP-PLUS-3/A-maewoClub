export interface Recipe {
  id: number;
  userId: number;
  title: string;
  tagId: number;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  //viewCount?: number;
}

export interface TopRecipe extends Recipe {
  likeCount: number;
}
