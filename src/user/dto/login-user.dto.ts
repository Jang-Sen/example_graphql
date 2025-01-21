import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsEmail()
  @ApiProperty({ description: '회원 이메일', example: 'dh789521@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ description: '회원 비밀번호', example: '123456a!' })
  password: string;
}
