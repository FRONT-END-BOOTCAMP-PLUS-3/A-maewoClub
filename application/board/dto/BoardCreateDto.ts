import { BoardImageDto } from "./BoardImageDto";

export interface BoardCreateDto {
  userId: string;
  title: string;
  description: string;
  tagId: number;
  images?: BoardImageDto[];
}
