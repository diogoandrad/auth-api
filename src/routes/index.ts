import { Router } from "express";
import { authRouter } from "./auth.router";
import { profileRouter } from "./profile.router";
import { userRouter } from "./user.router";
import { jwtVerify } from "../modules/auth/repositories/AuthRepository";

const routes = Router()

routes.get('/', (request, response) => {
    response.json({ message: "Welcome to NodeJs Api!" });
});

routes.use('/auth', authRouter)
routes.use('/profiles', profileRouter)
routes.use('/users', userRouter)

export { routes }