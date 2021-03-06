import { Field, ObjectType } from '@nestjs/graphql';
import { Account } from 'src/account/entities/account.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  password: string;

  @CreateDateColumn()
  @Field(() => String)
  created: Date;

  @UpdateDateColumn()
  @Field(() => String)
  updated: Date;

  @OneToMany(() => Account, (account) => account.user)
  @Field(() => [Account], { nullable: true })
  accounts: [Account];
}
