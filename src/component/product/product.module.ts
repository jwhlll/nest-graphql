import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/component/product/entity/product.entity';
import { ProductService } from 'src/component/product/product.service';
import { ProductResolver } from 'src/component/product/product.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
