import { Module } from '@nestjs/common';
import { SegmentreturnwayService } from './segmentreturnway.service';
import { SegmentreturnwayController } from './segmentreturnway.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Segmentreturnway } from './entities/segmentreturnway.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Segmentreturnway])],
  controllers: [SegmentreturnwayController],
  providers: [SegmentreturnwayService]
})
export class SegmentreturnwayModule {}
