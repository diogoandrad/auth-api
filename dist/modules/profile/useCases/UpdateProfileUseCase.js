"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileUseCase = void 0;
const ProfileDTO_1 = require("../dtos/ProfileDTO");
class UpdateProfileUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async execute(id, data) {
        const name = data.name;
        const profileAlreadyExists = name !== undefined ? await this.profileRepository.findOne({ name }) : null;
        if (profileAlreadyExists && profileAlreadyExists.id != id)
            throw new Error('Profile already used.');
        const profile = new ProfileDTO_1.ProfileDTO(data);
        await this.profileRepository.update(id, profile);
    }
}
exports.UpdateProfileUseCase = UpdateProfileUseCase;
