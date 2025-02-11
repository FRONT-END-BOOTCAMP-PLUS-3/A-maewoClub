import { BoardCreateDto } from "./../../application/board/dto/BoardCreateDto";
import { Board } from "@/domain/entities/Board";

export interface BoardRepository {
  count(): number | PromiseLike<number>;
  findAll(keyword: number, from: number, to: number): Promise<Board[]>;
  findOne(id: number): Promise<Board>;
  addPost(board: BoardCreateDto): Promise<number>;
}
