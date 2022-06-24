import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { KakaoLogin } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [KakaoLogin],
})
export class AppModule {}