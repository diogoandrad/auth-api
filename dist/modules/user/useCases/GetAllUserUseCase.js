"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserUseCase = void 0;
class GetAllUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return await this.userRepository.findAll({ profile: true });
    }
}
exports.GetAllUserUseCase = GetAllUserUseCase;
