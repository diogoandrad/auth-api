import { CreateProfileUseCase } from "../useCases/CreateProfileUseCase";
import { Request, Response } from "express";

export class CreateProfileController {

    constructor(
        private createProfileUseCase: CreateProfileUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            await this.createProfileUseCase.execute(request.body);

            return response.status(201).send();

        } catch (error) {

            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
            
        }
        
    }

}