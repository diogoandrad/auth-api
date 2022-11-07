"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfileUseCase = void 0;
class DeleteProfileUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async execute(id) {
        await this.profileRepository.delete(id);
    }
}
exports.DeleteProfileUseCase = DeleteProfileUseCase;
