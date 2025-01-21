import { Base } from '../../common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Product extends Base {
  @Column()
  @Field()
  public name: string;

  @Column()
  @Field(() => Int)
  public price: number;

  @Column()
  @Field()
  public description: string;

  @Column()
  @Field()
  public category: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  public productImg?: string;
}
