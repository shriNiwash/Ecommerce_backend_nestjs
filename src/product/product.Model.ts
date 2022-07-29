import * as mongoose from 'mongoose';
export const EcommerceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        allowNull:false,
    },
    title:{
        type:String,
        required:true,
        allowNull:false,
    },
    price:{
        type:Number,
        required:true,
        allowNull:false
    },
    description:{
        type:String,
        required:true,
        allowNull:false,
    },
    image:{
        type:String,
        required:true,
        allowNull:false,
    }
})

export interface Product{
    name:string;
    title:string;
    price:number;
    description:string;
    image:string;
}