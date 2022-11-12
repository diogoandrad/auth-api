import { GetByIdUserUseCase } from '../useCases/GetByIdUserUseCase';
import { Request, Response } from 'express';

export class GetByIdUserController {
  constructor(private getByIdUserUseCase: GetByIdUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.getByIdUserUseCase.execute(request.params.id);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unknown error',
      });
    }
  }
}
