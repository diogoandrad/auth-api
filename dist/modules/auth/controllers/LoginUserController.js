"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = void 0;
class LoginUserController {
    loginUserUseCase;
    constructor(loginUserUseCase) {
        this.loginUserUseCase = loginUserUseCase;
    }
    async handle(request, response) {
        try {
            return await this.loginUserUseCase.execute(request.body, response);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.LoginUserController = LoginUserController;
