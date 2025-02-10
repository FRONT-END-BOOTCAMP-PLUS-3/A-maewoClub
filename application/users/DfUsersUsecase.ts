import { UserRepository } from "@/domain/repositories/UserRepository";
import { SbUserRepository } from "@/infrastructure/repositories/users/SbUserRepository";
import { UserDto } from "./dto/UserDto";

const userRepository = new SbUserRepository();

export class UserListUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.getUsers();
  }
}

export class FindUserByUserIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    return await this.userRepository.findUserByUserId(id);
  }
}

export class GetUserByEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string): Promise<UserDto | null> {
    return await this.userRepository.getUserByEmail(email);
  }
}

export class CheckUserPasswordUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<boolean> {
    return await this.userRepository.checkPassword(email, password);
  }
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(nickname: string, email: string, provider: string) {
    return await this.userRepository.createUser(nickname, email, provider);
  }
}

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    return await this.userRepository.deleteUser(id);
  }
}

export const userListUseCase = new UserListUseCase(userRepository);
export const findUserByUserIdUseCase = new FindUserByUserIdUseCase(
  userRepository
);
export const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository);
export const checkUserPasswordUseCase = new CheckUserPasswordUseCase(
  userRepository
);
export const createUserUseCase = new CreateUserUseCase(userRepository);
export const deleteUserUseCase = new DeleteUserUseCase(userRepository);
