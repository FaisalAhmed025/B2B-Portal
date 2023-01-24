import { Module } from '@nestjs/common';
import { SegmentonewayService } from './segmentoneway.service';
import { SegmentonewayController } from './segmentoneway.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Segmentoneway } from './entities/segmentoneway.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Segmentoneway])],
  controllers: [SegmentonewayController],
  providers: [SegmentonewayService]
})
export class SegmentonewayModule {}
