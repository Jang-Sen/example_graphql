import { Column, Entity } from 'typeorm';
import { Base } from '../../common/entities/base.entity';

@Entity()
export class User extends Base {
  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;
}
