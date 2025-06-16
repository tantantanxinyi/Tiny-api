import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TinyModule } from './tiny/tiny.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TinyModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
