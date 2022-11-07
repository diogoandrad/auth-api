"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileUseCase = void 0;
const ProfileDTO_1 = require("../dtos/ProfileDTO");
const uuid_1 = require("uuid");
class CreateProfileUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async execute(data) {
        const name = data.name;
        const profileAlreadyExists = await this.profileRepository.findOne({ name });
        if (profileAlreadyExists)
            throw new Error('Profile already used.');
        const profile = new ProfileDTO_1.ProfileDTO(data);
        profile.id = (0, uuid_1.v4)();
        profile.createdAt = new Date();
        profile.status = true;
        await this.profileRepository.create(profile);
    }
}
exports.CreateProfileUseCase = CreateProfileUseCase;
