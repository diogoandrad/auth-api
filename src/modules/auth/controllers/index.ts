import { UserRepository } from '../../user/repositories/UserRepository';
import { User } from '../../../database/entities/User';

import { LoginAuthUseCase } from '../useCases/LoginAuthUseCase';
import { LoginAuthController } from './LoginAuthController';

const userRepository = new UserRepository(User);

const loginAuthUseCase = new LoginAuthUseCase(userRepository);
const loginAuthController = new LoginAuthController(loginAuthUseCase);

export { loginAuthController };
