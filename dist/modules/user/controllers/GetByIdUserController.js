"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdUserController = void 0;
class GetByIdUserController {
    getByIdUserUseCase;
    constructor(getByIdUserUseCase) {
        this.getByIdUserUseCase = getByIdUserUseCase;
    }
    async handle(request, response) {
        try {
            const user = await this.getByIdUserUseCase.execute(request.params.id);
            return response.status(200).json(user);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.GetByIdUserController = GetByIdUserController;
