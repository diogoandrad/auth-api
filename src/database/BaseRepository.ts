import { IBaseRepository } from "./IBaseRepository";
import { dataSource } from "./DataSource";
import { EntityTarget, Repository } from "typeorm";

export abstract class BaseRepository<T> implements IBaseRepository<T>{

    private repository: Repository<T>;

    constructor(entity: EntityTarget<T>) {
        this.repository = dataSource.getRepository(entity);
    }

    async findAll(relations?: any): Promise<T[]> {
        return await this.repository.find({ relations: relations });
    }

    async findOne(params: any, relations?: any): Promise<T> {
        return await this.repository.findOne({ where: params, relations: relations });
    }

    async create(item: T): Promise<void> {
        const obj = await this.repository.create(item);
        await this.repository.save(obj);
    }

    async update(id: string, item: T): Promise<void> {
        const obj = await this.findOne({id});
        this.repository.merge(obj, item);
        await this.repository.save(obj);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}