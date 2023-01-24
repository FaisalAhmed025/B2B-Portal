import { Module } from '@nestjs/common';
import { VisachecklistService } from './visachecklist.service';
import { VisachecklistController } from './visachecklist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visachecklist } from './entities/visachecklist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Visachecklist])],
  controllers: [VisachecklistController],
  providers: [VisachecklistService]
})
export class VisachecklistModule {}
