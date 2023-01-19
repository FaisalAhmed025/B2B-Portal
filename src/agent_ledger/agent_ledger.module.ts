import { Module } from '@nestjs/common';
import { AgentLedgerService } from './agent_ledger.service';
import { AgentLedgerController } from './agent_ledger.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentLedger } from './entities/agent_ledger.entity';


@Module({
  imports:[TypeOrmModule.forFeature([AgentLedger])],
  controllers: [AgentLedgerController],
  providers: [AgentLedgerService]
})
export class AgentLedgerModule {}
