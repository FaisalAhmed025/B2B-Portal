import { Test, TestingModule } from '@nestjs/testing';
import { AgentLedgerService } from './agent_ledger.service';

describe('AgentLedgerService', () => {
  let service: AgentLedgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentLedgerService],
    }).compile();

    service = module.get<AgentLedgerService>(AgentLedgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
