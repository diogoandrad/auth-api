"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    deleteUserUseCase;
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    async handle(request, response) {
        try {
            await this.deleteUserUseCase.execute(request.params.id);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
