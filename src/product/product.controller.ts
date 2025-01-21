import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateResult } from 'typeorm';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: '제품 전체 조회' })
  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }

  @Get('/:id')
  @ApiOperation({ summary: '제품 상세 조회' })
  async getProductById(@Param('id') id: string): Promise<Product> {
    return await this.productService.getProductById(id);
  }

  @Post()
  @ApiOperation({ summary: '제품 등록' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: '제품 이름',
          example: 'iPhone 16',
        },
        price: {
          type: 'number',
          description: '제품 가격',
          example: '1250000',
        },
        description: {
          type: 'string',
          description: '제품 설명',
          example: 'Apple Intelligence를 위해 설계된 iPhone 16.',
        },
        category: {
          type: 'string',
          description: '제품 종류',
          example: 'iPhone',
        },
        productImg: {
          type: 'string',
          description: '제품 사진',
          example:
            'https://www.apple.com/v/iphone-16/d/images/overview/contrast/iphone_16__flbknhdndb22_large.jpg',
        },
      },
    },
  })
  @ApiConsumes('application/x-www-form-urlencoded')
  async createProduct(@Body() dto: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(dto);
  }

  @Put('/:id')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: '제품 이름',
          example: 'iPhone 16 Pro',
        },
        price: {
          type: 'number',
          description: '제품 가격',
          example: '1550000',
        },
        description: {
          type: 'string',
          description: '제품 설명',
          example:
            '비범한 속도와 효율을 iPhone 16 Pro에 선사하는 무시무시한 성능의 칩, A18 Pro 등장.',
        },
        category: {
          type: 'string',
          description: '제품 종류',
          example: 'iPhone',
        },
        productImg: {
          type: 'string',
          description: '제품 사진',
          example:
            'https://www.apple.com/v/iphone-16-pro/d/images/overview/contrast/iphone_16_pro__erqf8e51gl4y_large.jpg',
        },
      },
    },
  })
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiOperation({ summary: '제품 수정' })
  async updateProduct(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<UpdateResult> {
    return await this.productService.updateProduct(id, dto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: '제품 삭제' })
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
