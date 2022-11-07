"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const DataSource_1 = require("./DataSource");
class BaseRepository {
    repository;
    constructor(entity) {
        this.repository = DataSource_1.AppDataSource.getRepository(entity);
    }
    async findAll(relations) {
        return await this.repository.find({ relations: relations });
    }
    async findOne(params, relations) {
        return await this.repository.findOne({ where: params, relations: relations });
    }
    async create(item) {
        const obj = await this.repository.create(item);
        await this.repository.save(obj);
    }
    async update(id, item) {
        const obj = await this.findOne({ id });
        this.repository.merge(obj, item);
        await this.repository.save(obj);
    }
    async delete(id) {
        await this.repository.delete(id);
    }
}
exports.BaseRepository = BaseRepository;
