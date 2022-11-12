import { IUserRepository } from '../repositories/IUserRepository';

export class GetAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return await this.userRepository.findAll({ profile: true });
  }
}
