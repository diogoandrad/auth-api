import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";
import { Request, Response } from "express";

export class DeleteUserController {

    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            
            await this.deleteUserUseCase.execute(request.params.id);

            return response.status(200).send();

        } catch (error) {

            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
            
        }
        
    }

}