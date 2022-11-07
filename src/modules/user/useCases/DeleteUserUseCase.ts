import { IUserRepository } from "../repositories/IUserRepository";

export class DeleteUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(id: string) {

        await this.userRepository.delete(id);

    }

}