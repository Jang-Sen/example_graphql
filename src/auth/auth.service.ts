import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { LoginUserDto } from '../user/dto/login-user.dto';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadInterface } from '../common/interface/token-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // 회원가입
  async signup(dto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(dto);
  }

  // 로그인
  async login(dto: LoginUserDto): Promise<User> {
    const user = await this.userService.getUserBy('email', dto.email);

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw new HttpException(
        '비밀번호가 일치하지 않습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return user;
  }

  // 토큰 발행
  public getAccessToken(userId: string) {
    const payload: TokenPayloadInterface = { userId };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRATION_TIME'),
    });

    return accessToken;
  }
}
