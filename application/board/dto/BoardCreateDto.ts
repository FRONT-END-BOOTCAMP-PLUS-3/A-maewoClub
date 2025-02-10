export interface BoardCreateDto {
  userId: string;
  title: string;
  description: string;
  tagId: number;
  images?: { photoUrl: string }[];
}
