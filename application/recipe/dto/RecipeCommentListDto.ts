import { RecipeCommentDto } from "./RecipeCommentDto";

export interface RecipeCommentListDto {
  recipeComments: RecipeCommentDto[];

  // pager 를 위한 데이터
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  pages: number[];
}
