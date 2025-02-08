import { RecipeTagRepository } from "@/domain/repositories/RecipeTagRepository";
import { RecipeTagDto } from "./dto/RecipeTagDto";

export class DfRecipeTagUsecase {
  constructor(
     private repository: RecipeTagRepository,
   ) {} 

   async findAll(): Promise<RecipeTagDto[]>{
    return await this.repository.findAll();
   }
}