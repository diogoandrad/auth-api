"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileController = void 0;
class UpdateProfileController {
    updateProfileUseCase;
    constructor(updateProfileUseCase) {
        this.updateProfileUseCase = updateProfileUseCase;
    }
    async handle(request, response) {
        try {
            await this.updateProfileUseCase.execute(request.params.id, request.body);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.UpdateProfileController = UpdateProfileController;
