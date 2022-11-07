import { IProfileRepository } from "../repositories/IProfileRepository";

export class GetByIdProfileUseCase {

    constructor(
        private profileRepository: IProfileRepository
    ) {}
    
    async execute(id: string) {

        return await this.profileRepository.findOne({id});

    }

}