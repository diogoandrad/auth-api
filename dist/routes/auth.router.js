"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../modules/user/controllers");
const controllers_2 = require("../modules/auth/controllers");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('/register', (request, response) => {
    return controllers_1.createUserController.handle(request, response);
});
authRouter.post('/login', (request, response) => {
    return controllers_2.loginUserController.handle(request, response);
});
authRouter.post('/logout', (request, response) => {
    return controllers_2.logoutUserController.handle(request, response);
});
