import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { RequestUserInterface } from './interface/requestUser.interface';
import { AccessTokenGuard } from './guard/access-token.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @ApiOperation({ summary: '회원가입' })
  async signup(@Body() dto: CreateUserDto): Promise<User> {
    return await this.authService.signup(dto);
  }

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: '로그인' })
  async login(@Req() req: RequestUserInterface) {
    const user = req.user;
    const token = this.authService.getAccessToken(user.id);

    return { user, token };
  }

  @Get()
  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: '회원 정보' })
  async userInfo(@Req() req: RequestUserInterface) {
    return req.user;
  }
}
