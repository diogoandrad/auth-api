import { UpdateProfileUseCase } from "../useCases/UpdateProfileUseCase";
import { Request, Response } from "express";

export class UpdateProfileController {

    constructor(
        private updateProfileUseCase: UpdateProfileUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            
            await this.updateProfileUseCase.execute(request.params.id, request.body);

            return response.status(200).send();

        } catch (error) {

            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
            
        }
        
    }

}