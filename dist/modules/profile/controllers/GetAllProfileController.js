"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProfileController = void 0;
class GetAllProfileController {
    getAllProfileUseCase;
    constructor(getAllProfileUseCase) {
        this.getAllProfileUseCase = getAllProfileUseCase;
    }
    async handle(request, response) {
        try {
            const profiles = await this.getAllProfileUseCase.execute();
            return response.status(200).json(profiles);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.GetAllProfileController = GetAllProfileController;
