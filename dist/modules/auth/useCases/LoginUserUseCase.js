"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const AuthRepository_1 = require("../repositories/AuthRepository");
class LoginUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data, response) {
        const email = data.email;
        const user = await this.userRepository.findOne({ email });
        if (user) {
            const validPassword = await bcrypt_1.default.compare(data.password, user.password);
            if (validPassword) {
                const token = (0, AuthRepository_1.jwtSign)({ userId: user.id });
                return response.status(200).json({ auth: true, token: token });
            }
            else {
                return response.status(401).json({ auth: false, error: "Invalid password." });
            }
        }
        else {
            return response.status(401).json({ auth: false, error: "User does not exist." });
        }
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
