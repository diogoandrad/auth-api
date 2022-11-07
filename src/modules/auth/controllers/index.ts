import { UserRepository } from "../../user/repositories/UserRepository";
import { User } from "../../../database/entities/User";

import { LoginUserUseCase } from "../useCases/LoginUserUseCase";
import { LoginUserController } from "./LoginUserController";

import { LogoutUserUseCase } from "../useCases/LogoutUserUseCase";
import { LogoutUserController } from "./LogoutUserController";

const userRepository = new UserRepository(User);

const loginUserUseCase = new LoginUserUseCase(userRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

const logoutUserUseCase = new LogoutUserUseCase(userRepository);
const logoutUserController = new LogoutUserController(logoutUserUseCase);

export { loginUserController, logoutUserController }