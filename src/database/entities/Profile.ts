import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../BaseEntity';

@Entity('profile')
export class Profile extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;
}
