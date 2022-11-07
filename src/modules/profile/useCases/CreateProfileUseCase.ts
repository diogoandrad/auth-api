import { IProfileRepository } from "../repositories/IProfileRepository";
import { ProfileDTO } from "../dtos/ProfileDTO";
import { v4 as uuidv4 } from "uuid";

export class CreateProfileUseCase {

    constructor(
        private profileRepository: IProfileRepository
    ) {}
    
    async execute(data: ProfileDTO) {

        const name = data.name;

        const profileAlreadyExists = await this.profileRepository.findOne({name});

        if (profileAlreadyExists) throw new Error('Profile already used.');

        const profile = new ProfileDTO(data);

        profile.id = uuidv4();
        profile.createdAt = new Date();
        profile.status = true;

        await this.profileRepository.create(profile);

    }

}