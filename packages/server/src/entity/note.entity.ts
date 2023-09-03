import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity()
export class User extends Base {
	@Column()
	userId: number; //many to one - User

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	label: string;

	@Column()
	shareLink: string;

	@Column()
	isArchived: boolean;

	@Column()
	isDeleted: boolean;
}
