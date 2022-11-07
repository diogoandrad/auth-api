import { IUserRepository } from "../repositories/IUserRepository";

export class GetByIdUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(id: string) {

        return await this.userRepository.findOne({id}, {profile: true});

    }

}