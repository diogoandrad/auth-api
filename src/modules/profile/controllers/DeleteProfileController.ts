import { DeleteProfileUseCase } from '../useCases/DeleteProfileUseCase';
import { Request, Response } from 'express';

export class DeleteProfileController {
  constructor(private deleteProfileUseCase: DeleteProfileUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.deleteProfileUseCase.execute(request.params.id);
      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unknown error',
      });
    }
  }
}
