import { Module } from '@nestjs/common';
import { AgentFailedService } from './agent_failed.service';
import { AgentFailedController } from './agent_failed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentFailed } from './entities/agent_failed.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AgentFailed])],
  controllers: [AgentFailedController],
  providers: [AgentFailedService]
})
export class AgentFailedModule {}
