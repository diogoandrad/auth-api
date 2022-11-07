import { LoginUserUseCase } from "../useCases/LoginUserUseCase";
import { Request, Response } from "express";

export class LoginUserController {

    constructor(
        private loginUserUseCase: LoginUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            return await this.loginUserUseCase.execute(request.body, response);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }

}