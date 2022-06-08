import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

@Entity()
@ObjectType()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  plaidId: string;

  @Column()
  @Field(() => String)
  password: string;

  @Column()
  @Field(() => String)
  type: string;

  @CreateDateColumn()
  @Field(() => String)
  created: Date;

  @UpdateDateColumn()
  @Field(() => String)
  updated: Date;

  @ManyToOne(() => User, (user) => user.accounts)
  @Field(() => User)
  user: User;

  @Column()
  @Field()
  userId: string;
}
