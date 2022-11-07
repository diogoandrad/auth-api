"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutUserController = void 0;
class LogoutUserController {
    logoutUserUseCase;
    constructor(logoutUserUseCase) {
        this.logoutUserUseCase = logoutUserUseCase;
    }
    async handle(request, response) {
        try {
            await this.logoutUserUseCase.execute(request.body);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.LogoutUserController = LogoutUserController;
