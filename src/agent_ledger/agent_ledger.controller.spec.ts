import { Test, TestingModule } from '@nestjs/testing';
import { AgentLedgerController } from './agent_ledger.controller';
import { AgentLedgerService } from './agent_ledger.service';

describe('AgentLedgerController', () => {
  let controller: AgentLedgerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentLedgerController],
      providers: [AgentLedgerService],
    }).compile();

    controller = module.get<AgentLedgerController>(AgentLedgerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
