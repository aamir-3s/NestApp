import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIPrefix } from './Constant/commom';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
        app.enableCors(); 
        app.useGlobalPipes( new ValidationPipe());
        app.setGlobalPrefix(APIPrefix.Version);
        
  const port = parseInt(process.env.SERVER_PORT);     
  await app.listen(port);
}
bootstrap();
