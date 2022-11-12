import { Router } from 'express';
import {
  getAllUserController,
  getByIdUserController,
  createUserController,
  updateUserController,
  deleteUserController,
} from '../modules/user/controllers';

const userRouter = Router();

userRouter.get('/', (request, response) => {
  return getAllUserController.handle(request, response);
});

userRouter.get('/:id', (request, response) => {
  return getByIdUserController.handle(request, response);
});

userRouter.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

userRouter.put('/:id', (request, response) => {
  return updateUserController.handle(request, response);
});

userRouter.delete('/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

export { userRouter };
