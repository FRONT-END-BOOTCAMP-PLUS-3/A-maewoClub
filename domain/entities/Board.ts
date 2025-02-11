export interface Board {
  id: number;
  userId: string;
  title: string;
  description: string;
  tagId: number;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  viewCount: number;
}
