import { UserRepository } from '../../user/repositories/UserRepository';
import { User } from '../../../database/entities/User';

import { LoginUserUseCase } from '../useCases/LoginUserUseCase';
import { LoginUserController } from './LoginUserController';

const userRepository = new UserRepository(User);

const loginUserUseCase = new LoginUserUseCase(userRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController };
