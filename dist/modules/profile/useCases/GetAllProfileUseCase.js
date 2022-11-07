"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProfileUseCase = void 0;
class GetAllProfileUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async execute() {
        return await this.profileRepository.findAll();
    }
}
exports.GetAllProfileUseCase = GetAllProfileUseCase;
