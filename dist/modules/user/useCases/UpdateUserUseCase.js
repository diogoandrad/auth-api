"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const UserDTO_1 = require("../dtos/UserDTO");
class UpdateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, data) {
        const email = data.email;
        const userAlreadyExists = email !== undefined ? await this.userRepository.findOne({ email }) : null;
        if (userAlreadyExists && userAlreadyExists.id != id)
            throw new Error('Email already used.');
        const user = new UserDTO_1.UserDTO(data);
        await this.userRepository.update(id, user);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
