import { BoardTag } from "@/domain/entities/BoardTag";
import { BoardTagRepository } from "@/domain/repositories/BoardTagRepository";

export class DfBoardTagUsecase {
  constructor(private repository: BoardTagRepository) {}

  async findAll(): Promise<BoardTag[]> {
    return await this.repository.findAll();
  }
}
