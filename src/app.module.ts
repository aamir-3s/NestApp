import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssigmentModule } from './components/assigment/assigment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AssigmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
