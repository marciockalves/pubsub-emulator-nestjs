import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSubAdapter } from './pubusb.adapter';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PubSubAdapter],
})
export class AppModule {}
