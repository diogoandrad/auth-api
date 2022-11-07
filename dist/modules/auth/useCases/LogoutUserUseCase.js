"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutUserUseCase = void 0;
class LogoutUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        return;
    }
}
exports.LogoutUserUseCase = LogoutUserUseCase;
