import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Agent } from './entities/agent.entity';
import { AgentController } from './agent.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Agent])],
  controllers: [AgentController],
  providers: [AgentService]
})
export class AgentModule {}
