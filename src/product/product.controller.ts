import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.services';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class ProductController {
  constructor(
    private readonly ProductService: ProductService,
    private readonly jwtService: JwtService,
  ) {}

  cors: {
    origin: '*';
  };
  
  @Get('hi')
  getData(): string {
    return 'helo';
  }

  @Post('/insert')
  insertData(@Body() record: object): Promise<object> {
    return this.ProductService.getInsert(record);
  }

  @Get('/list')
  async getList():Promise<object>{
    return await this.ProductService.getData();
  }
  @Delete("/list/:_id")
  async getDelete(@Param() id:object):Promise<any>{
    return await this.ProductService.getDelete(id);
  }

  @Put("/list/:_id")
  async getUpdatas(@Param() id:object,@Body() record:object):Promise<any>{
    return await this.ProductService.getUpdate(id,record);
  }

  @Post('/payment-verification')
  async getPayment(@Query() record: any): Promise<any> {
    return await this.ProductService.getverified(record);
  }


  @Get('/data/:_id')
  async getDatas(@Param() id:string):Promise<any>{
    return this.ProductService.getDatabyid(id);
  }

}
