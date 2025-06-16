import { Module } from '@nestjs/common';
import { TinyController } from './tiny.controller';
import { TinyService } from './tiny.service';

@Module({
  controllers: [TinyController],
  providers: [TinyService]
})
export class TinyModule {}
