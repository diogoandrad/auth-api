import {
    Entity,
    Column
} from 'typeorm';

import { BaseEntity } from '../BaseEntity';

@Entity('profiles')
export class Profile extends BaseEntity {

    @Column()
    name: string;

}