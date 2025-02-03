export interface BoardComment {
  id: number;
  boardId: number;
  userId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
