import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity()
export class User extends Base {
	@Column()
	email: string;

	@Column()
	userName: string;

	@Column()
	password: string;
}
