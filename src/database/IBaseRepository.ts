export interface IBaseRepository<T> {
  findAll(relations?: any): Promise<T[]>;
  findOne(params: any, relations?: any): Promise<T>;
  create(item: T): Promise<void>;
  update(id: string, item: T): Promise<void>;
  delete(id: string): Promise<void>;
}
