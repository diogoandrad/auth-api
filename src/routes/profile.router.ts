import { Router } from "express";
import { 
    getAllProfileController,
    getByIdProfileController,
    createProfileController,
    updateProfileController,
    deleteProfileController
} from "../modules/profile/controllers";

const profileRouter = Router()

profileRouter.get('/', (request, response) => {
    return getAllProfileController.handle(request, response);
});

profileRouter.get('/:id', (request, response) => {
    return getByIdProfileController.handle(request, response);
});

profileRouter.post('/', (request, response) => {
    return createProfileController.handle(request, response);
});

profileRouter.put('/:id', (request, response) => {
    return updateProfileController.handle(request, response);
});

profileRouter.delete('/:id', (request, response) => {
    return deleteProfileController.handle(request, response);
});

export { profileRouter }