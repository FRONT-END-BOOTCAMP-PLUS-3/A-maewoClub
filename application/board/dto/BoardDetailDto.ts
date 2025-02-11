export interface BoardDetailDto {
  id: number;
  userId: string;
  title: string;
  description: string;
  tagId: number;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  viewCount: number;
  images: Array<{ photoUrl: string }>;
  comments: Array<{
    id: number;
    content: string;
    createdAt: Date;
  }>;
}
