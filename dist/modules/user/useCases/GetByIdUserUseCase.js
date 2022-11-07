"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdUserUseCase = void 0;
class GetByIdUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        return await this.userRepository.findOne({ id }, { profile: true });
    }
}
exports.GetByIdUserUseCase = GetByIdUserUseCase;
