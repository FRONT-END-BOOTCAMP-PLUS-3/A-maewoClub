export interface BoardCommentDto {
  id: number;
  boardId: number;
  userId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  nickname?: string;
}

export interface CreateBoardCommentDto {
  boardId: number;
  userId: number;
  content: string;
}

export interface UpdateBoardCommentDto {
  id: number;
  content: string;
}

export interface BoardCommentListDto {
  comments: BoardCommentDto[];
  totalCount: number;
}

export interface BoardCommentDetailDto extends BoardCommentDto {
  board?: {
    title: string;
    id: number;
  };
}
