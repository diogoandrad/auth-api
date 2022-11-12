import { IUserRepository } from '../repositories/IUserRepository';
import { UserDTO } from '../dtos/UserDTO';

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, data: UserDTO) {
    const email = data.email;

    const userAlreadyExists =
      email !== undefined ? await this.userRepository.findOne({ email }) : null;

    if (userAlreadyExists && userAlreadyExists.id != id)
      throw new Error('Email already used.');

    const user = new UserDTO(data);

    await this.userRepository.update(id, user);
  }
}
