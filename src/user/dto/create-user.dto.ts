import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: '회원 이름' })
  name: string;

  @IsEmail()
  @ApiProperty({ description: '회원 이메일' })
  email: string;

  @IsString()
  @ApiProperty({ description: '회원 비밀번호' })
  password: string;
}
