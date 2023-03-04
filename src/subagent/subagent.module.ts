import { Module } from '@nestjs/common';
import { SubagentService } from './subagent.service';
import { SubagentController } from './subagent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subagent } from './entities/subagent.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Subagent])],
  controllers: [SubagentController],
  providers: [SubagentService]
})
export class SubagentModule {}
