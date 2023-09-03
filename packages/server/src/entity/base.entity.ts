import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Base {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryGeneratedColumn()
	createdAt: Date;

	@PrimaryGeneratedColumn()
	deletedAt: Date;
}
