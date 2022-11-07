"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdProfileController = void 0;
class GetByIdProfileController {
    getByIdProfileUseCase;
    constructor(getByIdProfileUseCase) {
        this.getByIdProfileUseCase = getByIdProfileUseCase;
    }
    async handle(request, response) {
        try {
            const profile = await this.getByIdProfileUseCase.execute(request.params.id);
            return response.status(200).json(profile);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.GetByIdProfileController = GetByIdProfileController;
