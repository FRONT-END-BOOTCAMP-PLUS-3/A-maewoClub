export interface Board {
  id: number;
  userId: number;
  title: string;
  description: string;
  tagId: number;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
}
