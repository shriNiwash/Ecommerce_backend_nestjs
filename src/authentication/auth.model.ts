import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        allowNull:false,
    },
    password:{
        type:String,
        required:true,
        allowNull:false,
    },
    role:{
        type:String,
        required:true,
        allowNull:false,
    }
})

export interface User{
    username:string;
    password:string;
    role:string;
}
