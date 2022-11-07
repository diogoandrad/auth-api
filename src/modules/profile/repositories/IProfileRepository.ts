import { Profile } from "../../../database/entities/Profile";
import { IBaseRepository } from "../../../database/IBaseRepository";

export interface IProfileRepository extends IBaseRepository<Profile> { }