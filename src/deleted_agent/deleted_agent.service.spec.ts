import { Test, TestingModule } from '@nestjs/testing';
import { DeletedAgentService } from './deleted_agent.service';

describe('DeletedAgentService', () => {
  let service: DeletedAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletedAgentService],
    }).compile();

    service = module.get<DeletedAgentService>(DeletedAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
