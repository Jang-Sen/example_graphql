import { BeforeInsert, Column, Entity } from 'typeorm';
import { Base } from '../../common/entities/base.entity';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends Base {
  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @Column({ nullable: true })
  public phone?: string;

  @Column({ nullable: true })
  public image?: string;

  @BeforeInsert()
  async beforeFunction(): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
