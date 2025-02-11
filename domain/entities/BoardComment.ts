export interface BoardComment {
  id: number;
  boardId: number;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
