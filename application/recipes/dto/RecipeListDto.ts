import { RecipeDto } from "./RecipeDto";

export interface RecipeListDto {
    recipes: RecipeDto[];

    // pager 를 위한 데이터
    totalCount: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    pages: number[];
}