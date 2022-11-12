import { UpdateUserUseCase } from '../useCases/UpdateUserUseCase';
import { Request, Response } from 'express';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.updateUserUseCase.execute(request.params.id, request.body);
      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unknown error',
      });
    }
  }
}
