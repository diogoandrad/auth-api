import { Router } from 'express';
import { authRouter } from './auth.router';
import { profileRouter } from './profile.router';
import { userRouter } from './user.router';
import { jwtVerify } from '../modules/auth/repositories/AuthRepository';

const routes = Router();

routes.get('/', jwtVerify, (request, response) => {
  response.json({ message: 'Welcome to NodeJs Api!' });
});

routes.use('/auth', jwtVerify, authRouter);
routes.use('/profiles', jwtVerify, profileRouter);
routes.use('/users', jwtVerify, userRouter);

export { routes };
