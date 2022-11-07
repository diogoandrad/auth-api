import { IUserRepository } from "../repositories/IUserRepository";
import { UserDTO } from "../dtos/UserDTO";
import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcrypt';

export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) {}
    
    async execute(data: UserDTO) {

        const email = data.email;

        const userAlreadyExists = await this.userRepository.findOne({email});

        if (userAlreadyExists) throw new Error('User already exists.');

        const user = new UserDTO(data);

        user.id = uuidv4();
        user.createdAt = new Date();
        user.status = true;
        user.password = await bcrypt.hash(user.password, 10);

        await this.userRepository.create(user);

    }

}