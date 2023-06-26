import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: 'https://shri-ecommerce-project.vercel.app',
    credentials:true,
    methods:["GET","POST","DELETE","PUT","PATCH"]
  })

  await app.listen(3001);
}
bootstrap();
