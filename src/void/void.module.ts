import { Module } from '@nestjs/common';
import { VoidService } from './void.service';
import { VoidController } from './void.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Void } from './entities/void.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Void])],
  controllers: [VoidController],
  providers: [VoidService]
})
export class VoidModule {}
