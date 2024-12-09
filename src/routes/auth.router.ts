import { Router } from 'express';
import { createUserController } from '../modules/user/controllers';
import { loginAuthController } from '../modules/auth/controllers';

const authRouter = Router();

authRouter.post('/register', (request, response) => {
  return createUserController.handle(request, response);
});

authRouter.post('/login', (request, response) => {
  return loginAuthController.handle(request, response);
});

export { authRouter };
