import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column
} from 'typeorm';

export class BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({default: true})
    status: boolean;

}