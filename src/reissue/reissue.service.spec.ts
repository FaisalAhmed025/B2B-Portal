import { Test, TestingModule } from '@nestjs/testing';
import { ReissueService } from './reissue.service';

describe('ReissueService', () => {
  let service: ReissueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReissueService],
    }).compile();

    service = module.get<ReissueService>(ReissueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
