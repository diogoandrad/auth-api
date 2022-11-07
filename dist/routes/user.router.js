"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../modules/user/controllers");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get('/', (request, response) => {
    return controllers_1.getAllUserController.handle(request, response);
});
userRouter.get('/:id', (request, response) => {
    return controllers_1.getByIdUserController.handle(request, response);
});
userRouter.post('/', (request, response) => {
    return controllers_1.createUserController.handle(request, response);
});
userRouter.put('/:id', (request, response) => {
    return controllers_1.updateUserController.handle(request, response);
});
userRouter.delete('/:id', (request, response) => {
    return controllers_1.deleteUserController.handle(request, response);
});
