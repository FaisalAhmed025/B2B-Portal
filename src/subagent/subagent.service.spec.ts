import { Test, TestingModule } from '@nestjs/testing';
import { SubagentService } from './subagent.service';

describe('SubagentService', () => {
  let service: SubagentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubagentService],
    }).compile();

    service = module.get<SubagentService>(SubagentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
