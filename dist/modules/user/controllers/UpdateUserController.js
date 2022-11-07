"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    updateUserUseCase;
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handle(request, response) {
        try {
            await this.updateUserUseCase.execute(request.params.id, request.body);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.UpdateUserController = UpdateUserController;
