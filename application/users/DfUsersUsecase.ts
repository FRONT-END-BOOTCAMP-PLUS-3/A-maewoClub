import { UserRepository } from "@/domain/repositories/users/UserRepository";
import { SbUserRepository } from "@/infrastructure/repositories/users/SbUserRepository";

export class LoginUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.getUsers();
  }
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(nickname: string, email: string, provider: string) {
    return await this.userRepository.createUser(nickname, email, provider);
  }
}

export const createUserUseCase = new CreateUserUseCase(new SbUserRepository());
export const loginUserUseCase = new LoginUserUseCase(new SbUserRepository());
