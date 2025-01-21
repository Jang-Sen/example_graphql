import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  // 전체 조회
  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }

  // 상세 조회
  @Query(() => Product)
  async getProductById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Product> {
    return await this.productService.getProductById(id);
  }

  // 등록
  @Mutation(() => Product)
  async createProduct(
    @Args('dto', { type: () => CreateProductDto }) dto: CreateProductDto,
  ) {
    return await this.productService.createProduct(dto);
  }

  // 수정
  @Mutation(() => Product)
  async updateProduct(
    @Args('id', { type: () => String }) id: string,
    @Args('dto', { type: () => UpdateProductDto }) dto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productService.updateProduct(id, dto);
  }

  // 삭제
  @Mutation(() => String)
  async deleteProduct(
    @Args('id', { type: () => String }) id: string,
  ): Promise<string> {
    return await this.productService.deleteProduct(id);
  }
}
