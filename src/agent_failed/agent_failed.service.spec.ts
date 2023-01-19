import { Test, TestingModule } from '@nestjs/testing';
import { AgentFailedService } from './agent_failed.service';

describe('AgentFailedService', () => {
  let service: AgentFailedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentFailedService],
    }).compile();

    service = module.get<AgentFailedService>(AgentFailedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
