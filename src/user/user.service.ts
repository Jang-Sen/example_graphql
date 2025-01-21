import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  // 전체 조회
  async getUsers(): Promise<User[]> {
    return await this.repository.find();
  }

  // 유저 조회
  async getUserBy(key: 'id' | 'email', value: string): Promise<User> {
    const user = await this.repository.findOneBy({ [key]: value });

    if (!user) {
      throw new NotFoundException('존재하지 않는 회원입니다.');
    }

    return user;
  }
}
