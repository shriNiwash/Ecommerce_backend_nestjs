import { Module } from '@nestjs/common';
import { AuthServices } from './auth.services';
import { AuthController } from './auth.controller';
import { UserSchema } from './auth.model';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';


@Module({
  controllers: [AuthController],
  imports:[MongooseModule.forFeature([{name:'userInfo',schema:UserSchema}]),
  JwtModule.register({
    secret:'shriNiwash',
    signOptions:{expiresIn:'60s'}
  })
],
  providers: [AuthServices,JwtStrategy],
})
export class AuthModule {}