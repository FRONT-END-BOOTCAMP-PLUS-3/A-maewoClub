import { Board } from "@/domain/entities/Board";
import { Recipe } from "@/domain/entities/Recipe";

export interface UserInfoModalDto {
    userRecipes: Recipe[];
    userBoards: Board[];
}

export interface UserInfoRecipesModalDto {
    id: number;
    userId: string;
    title: string;
    description: string,
    tagId: number;
    createdAt: Date;
    updatedAt: Date;
    likeCount: number;
}

export interface UserInfoBoardsModalDto {
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