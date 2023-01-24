import { Module } from '@nestjs/common';
import { StafflistService } from './stafflist.service';
import { StafflistController } from './stafflist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stafflist } from './entities/stafflist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Stafflist])],
  controllers: [StafflistController],
  providers: [StafflistService]
})
export class StafflistModule {}
