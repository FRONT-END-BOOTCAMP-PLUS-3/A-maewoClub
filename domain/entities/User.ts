export interface User {
  id: string;
  nickname: string;
  level: number;
  role: string;
  email: string;
  password?: string;
  provider?: string;
  photoUrl?: string;
  publicStatus: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
