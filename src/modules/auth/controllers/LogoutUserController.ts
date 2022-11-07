import { LogoutUserUseCase } from "../useCases/LogoutUserUseCase";
import { Request, Response } from "express";

export class LogoutUserController {

    constructor(
        private logoutUserUseCase: LogoutUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            await this.logoutUserUseCase.execute(request.body);
            
            return response.status(200).send();

        } catch (error) {

            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
            
        }
        
    }

}