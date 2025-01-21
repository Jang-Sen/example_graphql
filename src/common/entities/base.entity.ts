import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class Base {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  public id: string;

  @CreateDateColumn()
  @Field()
  public createAt: Date;

  @UpdateDateColumn()
  @Field()
  public updateAt: Date;

  @DeleteDateColumn()
  @Field({ nullable: true })
  public deleteAt: Date;
}
