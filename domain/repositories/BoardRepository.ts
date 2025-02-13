import { BoardCreateDto } from "./../../application/board/dto/BoardCreateDto";
import { Board } from "@/domain/entities/Board";

export interface BoardRepository {
  count(): number | PromiseLike<number>;
  findAll(keyword: number, from: number, to: number): Promise<Board[]>;
  findBoardByUserId(id:string): Promise<Board[]>;
  findOne(id: number): Promise<Board>;
  addPost(board: BoardCreateDto): Promise<number>;
  deleteBoard(id: number): Promise<void>;
}
