import { Injectable } from '@nestjs/common';
import { Product } from './product.Model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { response } from 'express';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('productData') private readonly ProductModel: Model<Product>,
  ) {}

  helloEveryOne(): string {
    return 'Helo there this is me from mongodb';
  }

  async getInsert(data: object): Promise<object> {
    const insert = new this.ProductModel(data);
    await insert.save();
    return insert;
  }

  async getData(): Promise<object> {
    const data = await this.ProductModel.find();
    return data;
  }

  async getDelete(id:object):Promise<any>{
    const data = await this.ProductModel.findByIdAndDelete(id);
    return data;
  }

  async getUpdate(id:object,record:object):Promise<any>{
    const data = await this.ProductModel.findByIdAndUpdate(id,record);
    return data;
  }

  // async getPaymentVerification(datas:object):Promise<object>{
  //  const  dat = datas
  //  const config = datas
  //   const data = await axios.post("https://khalti.com/api/v2/payment/verify/", dat, config);
  //   return data;
  // }

  async getDatabyid(id: string): Promise<object> {
    const data = await this.ProductModel.findById(id);
    return data;
  }

  async getverified(datas: any): Promise<object>{
    
    const amount = parseInt(datas.amount);
    let data = {
      "token": datas.token,
      "amount": amount,
    };
    console.log(datas);

    let config = {
      headers: { Authorization: `Key ${datas.key}` },
    };
    const dataa = await axios.post(
      'https://khalti.com/api/v2/payment/verify/',
      data,
      config,
    );
    return dataa;
  }


  

}
