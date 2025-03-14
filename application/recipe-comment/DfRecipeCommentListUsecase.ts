import { RecipeCommentDto } from "./dto/RecipeCommentDto";
import { RecipeCommentListDto } from "./dto/RecipeCommentListDto";

import { RecipeComment } from "@/domain/entities/RecipeComment";
import { RecipeCommentImageRepository } from "@/domain/repositories/RecipeCommentImageRepository";
import { RecipeCommentRepository } from "@/domain/repositories/RecipeCommentRepository";
import { RecipeCommentWithImageDto } from "./dto/RecipeCommentWithImageDto";

export class DfRecipeCommentListUsecase {
  constructor(
    private recipeCommentRepository: RecipeCommentRepository,
    private recipeCommentImageRepository: RecipeCommentImageRepository
  ) {}

  
  async getRecipeComment(id: number) {
    return await this.recipeCommentRepository.findOne(id);
  }

  async getRecipeAllCommentListTest(id: number): Promise<RecipeCommentWithImageDto[]> {
    const comments = await this.recipeCommentRepository.findCommentAll(id);
    console.log("comments 데이터 확인용~~" , comments );
    const ImageIds = comments.map((comment) => comment.id);
    console.log("ImageIds 데이터 확인용~~", ImageIds);
    const images = await this.recipeCommentImageRepository.findAllByRecipeId(ImageIds);

    const commentsWithImagesDto: RecipeCommentWithImageDto[] = await Promise.all(
      comments.map(async (comment) => {
        const image = images.find((img) => img.id === comment.id);
        console.log("image사용 되는가? Images Dto 확인용 ", image);
        return {
          ...comment,
          imageUrl: image ? image.photoUrl : null,
        };
      })
    );
    return commentsWithImagesDto;
}

  async execute(
    id: number = 1,
    page: number = 1
  ): Promise<RecipeCommentListDto> {

    const from = (page - 1) * 8;
    const to = page * 8 - 1;

    const keyword = 0;

    const recipeComments: RecipeComment[] =
      await this.recipeCommentRepository.findAll(keyword, from, to, id);

    const recipeCommentDtos: RecipeCommentDto[] = await Promise.all(
      recipeComments.map(async (recipeComment: RecipeComment) => {
        const image =
          await this.recipeCommentImageRepository.findDefaultImageByRecipeId(
            recipeComment.id
          );

        return {
          ...recipeComment,
          img: image ? image.photoUrl :null,
        };
      })
    );

    const totalCount: number = await this.recipeCommentRepository.count(id);

    return {
      recipeComments: recipeCommentDtos,
      totalCount,
      totalPages: Math.ceil(totalCount / 8),
      hasPreviousPage: page > 1,
      hasNextPage: page < Math.ceil(totalCount / 8),
      pages: Array.from({ length: Math.ceil(totalCount / 8) }, (_, i) => i + 1),
    };
  }
}
