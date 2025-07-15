import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('The Book Nest Api')
    .setDescription('Comprehensive REST API for The Book Nest online bookstore')
    .setVersion('0.0.1')
    .addTag('Books')
    .addBearerAuth()
    .addServer('http://localhost:3000', 'Development')
    .addServer('https://api.booknest.com', 'Production')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.use(
    '/reference',
    apiReference({
      theme: 'Saturn',
      content: document,
      configuration: {
        sidebar: {
          showOperations: true,
          showSchemas: true,
        },
        header: {
          showSearch: true,
          showDownloadButton: true,
        },
        content: {
          showRequestSample: true,
          showResponseSample: true,
        },
      },
    }),
  );

  // SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => console.log(err));
