export interface UserDto {
  id: string;
  nickname: string;
  level: string;
  role: string;
  email: string;
  photoUrl?: string;
  createdAt: Date;
}
