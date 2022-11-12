import { Router } from 'express';
import { createUserController } from '../modules/user/controllers';
import { loginUserController } from '../modules/auth/controllers';

const authRouter = Router();

authRouter.post('/register', (request, response) => {
  return createUserController.handle(request, response);
});

authRouter.post('/login', (request, response) => {
  return loginUserController.handle(request, response);
});

export { authRouter };
