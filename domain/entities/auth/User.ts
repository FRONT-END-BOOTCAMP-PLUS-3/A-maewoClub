export interface User {
  id: number;
  nickname: string;
  level: number;
  role: string;
  email: string;
  password: string;
  photoUrl: string;
  publicStatus: boolean;
  createdAt: Date;
  updatedAt: Date;
}
