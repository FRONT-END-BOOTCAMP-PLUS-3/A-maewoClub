import { Board } from "@/domain/entities/boards/Board";


export interface BoardRepository {
  count(): number | PromiseLike<number>;
  findAll(keyword: number, from: number, to: number): Promise<Board[]>;
}
