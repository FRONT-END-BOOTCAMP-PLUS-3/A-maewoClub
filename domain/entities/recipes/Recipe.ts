export interface Recipe {
  id: number;
  userId: number;
  title: string;
  tagId: number;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
}
