import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./auth.model";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class AuthServices{
    constructor(@InjectModel('userInfo') private readonly UserModel:Model<User>){}

    async create(data:any):Promise<User>{
        const userData = new this.UserModel(data);
        return await userData.save();
    }

    async findOne(condition:any):Promise<User>{
        return this.UserModel.findOne(condition);
    }

}