import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity()
export class NoteShare extends Base {
	@Column()
	noteId: number; //many to many

	@Column()
	userId: number; //many to many
}
