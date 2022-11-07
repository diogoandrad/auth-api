"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const UserDTO_1 = require("../dtos/UserDTO");
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const email = data.email;
        const userAlreadyExists = await this.userRepository.findOne({ email });
        if (userAlreadyExists)
            throw new Error('User already exists.');
        const user = new UserDTO_1.UserDTO(data);
        user.id = (0, uuid_1.v4)();
        user.createdAt = new Date();
        user.status = true;
        user.password = await bcrypt_1.default.hash(user.password, 10);
        await this.userRepository.create(user);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
