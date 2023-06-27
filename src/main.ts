import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
// import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';
console.log(__dirname)
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', '..', 'client', 'dist'));
  // app.get(express.static(join(__dirname, '..', '..','client', 'dist')));
  app.enableCors(); // 필요한 경우 CORS 설정
  await app.listen(3000);
}

bootstrap();
