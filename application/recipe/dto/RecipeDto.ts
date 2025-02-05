export interface RecipeDto {
  id: number;
  userId: number,
  title: string,
  tagId: number,
  createdAt: Date,
  updatedAt: Date,
  likeCount:number,
  
  // photoUrl: string;

  // 해당 recipe 에 있는 user 의 정보를 use case 에서 함수 만들기 user 관련 dto 데이터 정의하기 
}