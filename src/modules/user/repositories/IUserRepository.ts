import { User } from "../../../database/entities/User";
import { IBaseRepository } from "../../../database/IBaseRepository";

export interface IUserRepository extends IBaseRepository<User> { }