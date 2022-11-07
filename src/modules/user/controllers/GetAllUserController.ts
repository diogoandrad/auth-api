import { GetAllUserUseCase } from "../useCases/GetAllUserUseCase";
import { Request, Response } from "express";

export class GetAllUserController {

    constructor(
        private getAllUserUseCase: GetAllUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            
            const users = await this.getAllUserUseCase.execute();

            return response.status(200).json(users);

        } catch (error) {

            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
            
        }
        
    }

}