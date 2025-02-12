export interface BoardDto {
  id: number;
  userId: string;
  title: string;
  description: string;
  tagId: number;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
  viewCount: number;
  img?: string;
}
