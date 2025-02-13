export interface Recipe {
  id: number;
  userId: string;
  title: string;
  description: string,
  tagId: number;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  //viewCount?: number; // optional 
}

export interface TopRecipe extends Recipe {
  likeCount: number;
}
