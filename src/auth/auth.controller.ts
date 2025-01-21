import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: '회원가입' })
  async signup(dto: CreateUserDto): Promise<User> {
    return await this.authService.signup(dto);
  }

  @Post()
  @ApiOperation({ summary: '로그인' })
  async login(dto: LoginUserDto): Promise<User> {
    return await this.authService.login(dto);
  }
}
