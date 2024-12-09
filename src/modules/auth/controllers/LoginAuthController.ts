import { LoginAuthUseCase } from '../useCases/LoginAuthUseCase';
import { Request, Response } from 'express';

export class LoginAuthController {
  constructor(private loginAuthUseCase: LoginAuthUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      return await this.loginAuthUseCase.execute(request.body, response);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unknown error',
      });
    }
  }
}
