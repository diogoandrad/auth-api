"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdProfileUseCase = void 0;
class GetByIdProfileUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async execute(id) {
        return await this.profileRepository.findOne({ id });
    }
}
exports.GetByIdProfileUseCase = GetByIdProfileUseCase;
