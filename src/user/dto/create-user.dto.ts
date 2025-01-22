import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: '회원 이름', example: '오장원' })
  name: string;

  @IsEmail()
  @ApiProperty({ description: '회원 이메일', example: 'dh789521@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ description: '회원 비밀번호', example: '123456a!' })
  password: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: '회원 연락처', example: '01095110662' })
  phone?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: '회원 프로필 이미지',
    example: 'https://www.studiopeople.kr/common/img/default_profile.png',
  })
  image?: string;
}
