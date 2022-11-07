import {
    Entity,
    Column,
    ManyToOne
} from 'typeorm';

import { BaseEntity } from '../BaseEntity';
import { Profile } from './Profile';

@Entity('users')
export class User extends BaseEntity {

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Profile)
    profile: Profile;

}