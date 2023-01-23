import { Module } from '@nestjs/common';
import { DeletedAgentService } from './deleted_agent.service';
import { DeletedAgentController } from './deleted_agent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeletedAgent } from './entities/deleted_agent.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DeletedAgent])],
  controllers: [DeletedAgentController],
  providers: [DeletedAgentService]
})
export class DeletedAgentModule {}
