import { Module } from '@nestjs/common';
import { GroupfareService } from './groupfare.service';
import { GroupfareController } from './groupfare.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groupfare } from './entities/groupfare.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Groupfare])],
  controllers: [GroupfareController],
  providers: [GroupfareService]
})
export class GroupfareModule {}
