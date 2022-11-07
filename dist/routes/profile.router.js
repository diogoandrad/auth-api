"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../modules/profile/controllers");
const profileRouter = (0, express_1.Router)();
exports.profileRouter = profileRouter;
profileRouter.get('/', (request, response) => {
    return controllers_1.getAllProfileController.handle(request, response);
});
profileRouter.get('/:id', (request, response) => {
    return controllers_1.getByIdProfileController.handle(request, response);
});
profileRouter.post('/', (request, response) => {
    return controllers_1.createProfileController.handle(request, response);
});
profileRouter.put('/:id', (request, response) => {
    return controllers_1.updateProfileController.handle(request, response);
});
profileRouter.delete('/:id', (request, response) => {
    return controllers_1.deleteProfileController.handle(request, response);
});
