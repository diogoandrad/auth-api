import { ProfileRepository } from '../repositories/ProfileRepository';
import { Profile } from '../../../database/entities/Profile';

import { GetAllProfileUseCase } from '../useCases/GetAllProfileUseCase';
import { GetAllProfileController } from './GetAllProfileController';

import { GetByIdProfileUseCase } from '../useCases/GetByIdProfileUseCase';
import { GetByIdProfileController } from './GetByIdProfileController';

import { CreateProfileUseCase } from '../useCases/CreateProfileUseCase';
import { CreateProfileController } from './CreateProfileController';

import { UpdateProfileUseCase } from '../useCases/UpdateProfileUseCase';
import { UpdateProfileController } from './UpdateProfileController';

import { DeleteProfileUseCase } from '../useCases/DeleteProfileUseCase';
import { DeleteProfileController } from './DeleteProfileController';

const profileRepository = new ProfileRepository(Profile);

const getAllProfileUseCase = new GetAllProfileUseCase(profileRepository);
const getAllProfileController = new GetAllProfileController(getAllProfileUseCase);

const getByIdProfileUseCase = new GetByIdProfileUseCase(profileRepository);
const getByIdProfileController = new GetByIdProfileController(getByIdProfileUseCase)

const createProfileUseCase = new CreateProfileUseCase(profileRepository);
const createProfileController = new CreateProfileController(createProfileUseCase);

const updateProfileUseCase = new UpdateProfileUseCase(profileRepository);
const updateProfileController = new UpdateProfileController(updateProfileUseCase);

const deleteProfileUseCase = new DeleteProfileUseCase(profileRepository);
const deleteProfileController = new DeleteProfileController(deleteProfileUseCase);

export {
  getAllProfileController,
  getByIdProfileController,
  createProfileController,
  updateProfileController,
  deleteProfileController,
};
