import { CreateUserUseCase } from '../useCases/CreateUserUseCase';
import { Request, Response } from 'express';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.createUserUseCase.execute(request.body);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unknown error',
      });
    }
  }
}
