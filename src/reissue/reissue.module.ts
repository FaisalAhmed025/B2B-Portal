import { Module } from '@nestjs/common';
import { ReissueService } from './reissue.service';
import { ReissueController } from './reissue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reissue } from './entities/reissue.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Reissue])],
  controllers: [ReissueController],
  providers: [ReissueService]
})
export class ReissueModule {}
