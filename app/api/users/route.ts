import { UserListUseCase } from "@/application/users/DfUsersUsecase";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { SbUserRepository } from "@/infrastructure/repositories/users/SbUserRepository";
import { NextResponse } from "next/server";

export async function GET() {
  const userRepository: UserRepository = new SbUserRepository();

  const userListUsecase = new UserListUseCase(userRepository);

  const user = await userListUsecase.execute();
  return NextResponse.json({ user });
}
