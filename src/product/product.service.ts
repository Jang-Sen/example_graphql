import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  // 조회
  async getProducts(): Promise<Product[]> {
    return await this.repository.find();
  }

  // 등록
  async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = this.repository.create(dto);

    return await this.repository.save(product);
  }

  // 수정
  async updateProduct(
    id: string,
    dto: UpdateProductDto,
  ): Promise<UpdateResult> {
    const result = await this.repository.update(id, dto);

    if (!result.affected) {
      throw new NotFoundException('제품을 찾을 수 없습니다.');
    }

    return result;
  }

  // 삭제
  async deleteProduct(id: string): Promise<DeleteResult> {
    const result = await this.repository.delete(id);

    if (!result.affected) {
      throw new NotFoundException('제품을 찾을 수 없습니다.');
    }

    return result;
  }
}
