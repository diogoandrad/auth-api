import { IProfileRepository } from '../repositories/IProfileRepository';
import { ProfileDTO } from '../dtos/ProfileDTO';

export class UpdateProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async execute(id: string, data: ProfileDTO) {
    const name = data.name;

    const profileAlreadyExists =
      name !== undefined
        ? await this.profileRepository.findOne({ name })
        : null;

    if (profileAlreadyExists && profileAlreadyExists.id != id)
      throw new Error('Profile already used.');

    const profile = new ProfileDTO(data);

    await this.profileRepository.update(id, profile);
  }
}
