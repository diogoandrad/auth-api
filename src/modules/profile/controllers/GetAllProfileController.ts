import { GetAllProfileUseCase } from "../useCases/GetAllProfileUseCase";
import { Request, Response } from "express";

export class GetAllProfileController {

    constructor(
        private getAllProfileUseCase: GetAllProfileUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            
            const profiles = await this.getAllProfileUseCase.execute();

            return response.status(200).json(profiles);

        } catch (error) {

            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
            
        }
        
    }

}