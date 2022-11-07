"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserController = void 0;
class GetAllUserController {
    getAllUserUseCase;
    constructor(getAllUserUseCase) {
        this.getAllUserUseCase = getAllUserUseCase;
    }
    async handle(request, response) {
        try {
            const users = await this.getAllUserUseCase.execute();
            return response.status(200).json(users);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.GetAllUserController = GetAllUserController;
