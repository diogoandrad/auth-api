"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../../../database/entities/User");
const DataSource_1 = require("../../../database/DataSource");
const BaseRepository_1 = require("../../../database/BaseRepository");
const userRepository = DataSource_1.AppDataSource.getRepository(User_1.User);
class UserRepository extends BaseRepository_1.BaseRepository {
}
exports.UserRepository = UserRepository;
