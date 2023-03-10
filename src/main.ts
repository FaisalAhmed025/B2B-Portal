import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('B2B PORTAL')
    .setDescription('B2B Portal Api Description')
    .setVersion('1.0')
    .addTag('B2B')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
start();
