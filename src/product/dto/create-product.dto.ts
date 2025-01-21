import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
  @IsString()
  @Field()
  @ApiProperty({ description: '제품 이름', example: 'iPhone 16 Pro' })
  name: string;

  @IsNumber()
  @Type(() => Number)
  @Field(() => Int)
  @ApiProperty({ description: '제품 가격', example: '1550000' })
  price: number;

  @IsString()
  @Field()
  @ApiProperty({
    description: '제품 설명',
    example:
      '비범한 속도와 효율을 iPhone 16 Pro에 선사하는 무시무시한 성능의 칩, A18 Pro 등장.',
  })
  description: string;

  @IsString()
  @Field()
  @ApiProperty({ description: '제품 종류', example: 'iPhone' })
  category: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  @ApiPropertyOptional({
    description: '제품 사진',
    example:
      'https://www.apple.com/v/iphone-16-pro/d/images/overview/contrast/iphone_16_pro__erqf8e51gl4y_large.jpg',
  })
  productImg?: string;
}
