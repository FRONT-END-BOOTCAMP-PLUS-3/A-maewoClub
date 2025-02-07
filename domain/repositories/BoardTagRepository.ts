import { BoardTag } from "@/domain/entities/BoardTag";

export interface BoardTagRepository {
  findAll(): Promise<BoardTag[]>;
}
