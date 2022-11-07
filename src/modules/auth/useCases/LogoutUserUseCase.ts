import { IUserRepository } from "../../user/repositories/IUserRepository";
import { LogoutDTO } from "../dtos/LogoutDTO";

export class LogoutUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(data: LogoutDTO) {

        return;

    }

}