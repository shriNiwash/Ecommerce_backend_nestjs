import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.services';
import { MongooseModule } from '@nestjs/mongoose';
import { EcommerceSchema } from './product.Model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [ProductService],
  imports: [
    JwtModule.register({
      secret: 'shriNiwash',
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([
      { name: 'productData', schema: EcommerceSchema },
    ]),
  ],
  exports: [],
  controllers: [ProductController],
})
export class ProductModule {}
