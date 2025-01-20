import { Base } from '../../common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends Base {
  @Column()
  public name: string;

  @Column()
  public price: number;

  @Column()
  public description: string;

  @Column()
  public category: string;

  @Column({ nullable: true })
  public productImg?: string;
}
