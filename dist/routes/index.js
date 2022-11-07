"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const auth_router_1 = require("./auth.router");
const profile_router_1 = require("./profile.router");
const user_router_1 = require("./user.router");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', (request, response) => {
    response.json({ message: "Welcome to NodeJs Api!" });
});
routes.use('/auth', auth_router_1.authRouter);
routes.use('/profiles', profile_router_1.profileRouter);
routes.use('/users', user_router_1.userRouter);
