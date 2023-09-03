import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity()
export class Reminder extends Base {
	@Column()
	noteId: number; // many to one - Note

	@Column()
	title: string;

	@Column()
	ReminderDate: Date;

	@Column()
	ReminderTime: string;
}
