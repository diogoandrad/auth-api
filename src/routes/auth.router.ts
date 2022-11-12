import { Router } from 'express';
import { createUserController } from '../modules/user/controllers';
import {
  loginUserController,
  logoutUserController,
} from '../modules/auth/controllers';

const authRouter = Router();

authRouter.post('/register', (request, response) => {
  return createUserController.handle(request, response);
});

authRouter.post('/login', (request, response) => {
  return loginUserController.handle(request, response);
});

authRouter.post('/logout', (request, response) => {
  return logoutUserController.handle(request, response);
});

export { authRouter };
