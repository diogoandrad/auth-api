"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepository = void 0;
const Profile_1 = require("../../../database/entities/Profile");
const DataSource_1 = require("../../../database/DataSource");
const BaseRepository_1 = require("../../../database/BaseRepository");
const profileRepository = DataSource_1.AppDataSource.getRepository(Profile_1.Profile);
class ProfileRepository extends BaseRepository_1.BaseRepository {
}
exports.ProfileRepository = ProfileRepository;
