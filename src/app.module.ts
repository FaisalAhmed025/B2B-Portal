import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentModule } from './agent/agent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from './agent/entities/agent.entity';
import { AgentFailedModule } from './agent_failed/agent_failed.module';
import { AgentFailed } from './agent_failed/entities/agent_failed.entity';
import { AgentLedgerModule } from './agent_ledger/agent_ledger.module';
import { AgentLedger } from './agent_ledger/entities/agent_ledger.entity';
import { AirlinesModule } from './airlines/airlines.module';
import { Airlines } from './airlines/entities/airline.entity';
import { AirportsModule } from './airports/airports.module';
import { Airports } from './airports/entities/airport.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'b2b',
    entities: [Agent,AgentFailed, AgentLedger, Airlines,Airports],
  }), 
  AirportsModule,AgentModule, AgentFailedModule,
  AgentLedgerModule,
  AirlinesModule,
   
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
