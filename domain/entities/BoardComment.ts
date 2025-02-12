export interface BoardComment {
  id: number;
  boardId: number;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BoardCommentMapping {
  id: number;
  board_id: number;
  user_id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
