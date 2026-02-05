import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  party: string;

  @Column()
  age: number;
}

