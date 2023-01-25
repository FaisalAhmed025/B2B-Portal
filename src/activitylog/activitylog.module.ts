import { Module } from '@nestjs/common';
import { ActivitylogService } from './activitylog.service';
import { ActivitylogController } from './activitylog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activitylog } from './entities/activitylog.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Activitylog])],
  controllers: [ActivitylogController],
  providers: [ActivitylogService]
})
export class ActivitylogModule {}
