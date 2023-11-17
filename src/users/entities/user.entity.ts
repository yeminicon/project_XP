import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Role } from './roles.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false })
  full_name: string;

  @Column('varchar', { nullable: false, unique: true })
  email: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column('varchar', { nullable: false })
  phone: string;

  @Column('varchar', { default: Role.BUYER })
  role: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at!: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at!: Date;

  @Column('bool', { default: false })
  is_verified: boolean;

  @ManyToOne(() => User, (user) => user.invitedBy, { nullable: true })
  invitedBy: string;

  @Column('bool', { default: false, nullable: true })
  invitationAcceptance: boolean;

  @Column('timestamp', {
    nullable: true,
    name: 'invitationSentAt',
  })
  invitationSentAt: Date;

  @Column('varchar', { default: 'english', nullable: true })
  language: string;
}
