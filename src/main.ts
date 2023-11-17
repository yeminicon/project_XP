import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './shared/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    rawBody: true,
  });

  const envPort = process.env.PORT || 8080;

  const httpAdapterHost = app.get(HttpAdapterHost);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new AllExceptionFilter(httpAdapterHost));
  await app.listen(envPort);
}
bootstrap();
