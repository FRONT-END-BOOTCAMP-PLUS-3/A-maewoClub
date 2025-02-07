export interface User {
  id: string;
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
