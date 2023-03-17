import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/** bootstrap = 기본이름, 바뀌어도 상관 없음 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
