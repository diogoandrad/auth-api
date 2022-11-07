"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileController = void 0;
class CreateProfileController {
    createProfileUseCase;
    constructor(createProfileUseCase) {
        this.createProfileUseCase = createProfileUseCase;
    }
    async handle(request, response) {
        try {
            await this.createProfileUseCase.execute(request.body);
            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.CreateProfileController = CreateProfileController;
