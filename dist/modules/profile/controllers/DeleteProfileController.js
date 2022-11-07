"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfileController = void 0;
class DeleteProfileController {
    deleteProfileUseCase;
    constructor(deleteProfileUseCase) {
        this.deleteProfileUseCase = deleteProfileUseCase;
    }
    async handle(request, response) {
        try {
            await this.deleteProfileUseCase.execute(request.params.id);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.DeleteProfileController = DeleteProfileController;
