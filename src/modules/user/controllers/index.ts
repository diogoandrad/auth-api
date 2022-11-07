import { UserRepository } from "../repositories/UserRepository";
import { User } from "../../../database/entities/User";

import { GetAllUserUseCase } from "../useCases/GetAllUserUseCase";
import { GetAllUserController } from "./GetAllUserController";

import { GetByIdUserUseCase } from "../useCases/GetByIdUserUseCase";
import { GetByIdUserController } from "./GetByIdUserController";

import { CreateUserUseCase } from "../useCases/CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";

import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUserController";

const userRepository = new UserRepository(User);

const getAllUserUseCase = new GetAllUserUseCase(userRepository);
const getAllUserController = new GetAllUserController(getAllUserUseCase);

const getByIdUserUseCase = new GetByIdUserUseCase(userRepository);
const getByIdUserController = new GetByIdUserController(getByIdUserUseCase)

const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

const updateUserUseCase = new UpdateUserUseCase(userRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { getAllUserController, getByIdUserController, createUserController, updateUserController, deleteUserController }