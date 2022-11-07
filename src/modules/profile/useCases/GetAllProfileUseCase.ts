import { IProfileRepository } from "../repositories/IProfileRepository";

export class GetAllProfileUseCase {

    constructor(
        private profileRepository: IProfileRepository
    ) {}
    
    async execute() {

        return await this.profileRepository.findAll();

    }

}