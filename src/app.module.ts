import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './authentication/auth.module';


@Module({
  controllers: [AppController],
  imports:[AuthModule,ProductModule , MongooseModule.forRoot('mongodb+srv://shriNiwash:Mriphone12345@cluster0.waox8.mongodb.net/MERN_SHRI?retryWrites=true&w=majority'),],
  providers: [AppService,AppService],
})
export class AppModule {}
