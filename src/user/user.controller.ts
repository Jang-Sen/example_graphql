import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '유저 전체 조회' })
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'ID로 유저 조회' })
  async getUserBy(@Param('id') id: string): Promise<User> {
    return await this.userService.getUserBy('id', id);
  }
}
