import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductDto } from 'src/component/product/dto/product.dto';
import { InputProduct } from 'src/component/product/input/product.input';
import { ProductService } from 'src/component/product/product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductDto])
  async getProducts() {
    return await this.productService.getProduct();
  }

  @Mutation(() => ProductDto)
  async createProduct(@Args('data') data: InputProduct) {
    return await this.productService.createProduct(data);
  }
}
