import { BoardDto } from "./BoardDto";

export interface BoardListDto {
  boards: BoardDto[];

  // pager 를 위한 데이터
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  pages: number[];
}
