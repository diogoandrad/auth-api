import { GetByIdProfileUseCase } from "../useCases/GetByIdProfileUseCase";
import { Request, Response } from "express";

export class GetByIdProfileController {

    constructor(
        private getByIdProfileUseCase: GetByIdProfileUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            
            const profile = await this.getByIdProfileUseCase.execute(request.params.id);

            return response.status(200).json(profile);

        } catch (error) {

            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
            
        }
        
    }

}