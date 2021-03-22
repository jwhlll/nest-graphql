import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/component/product/dto/product.dto';
import { Product } from 'src/component/product/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(data: ProductDto) {
    const product = new Product();
    product.title = data.title;
    product.price = data.price;
    return await this.productRepository.save(product);
  }

  async getProduct() {
    return await this.productRepository.find();
  }
}
