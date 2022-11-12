import { IProfileRepository } from '../repositories/IProfileRepository';

export class DeleteProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async execute(id: string) {
    await this.profileRepository.delete(id);
  }
}
