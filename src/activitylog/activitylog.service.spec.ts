import { Test, TestingModule } from '@nestjs/testing';
import { ActivitylogService } from './activitylog.service';

describe('ActivitylogService', () => {
  let service: ActivitylogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitylogService],
    }).compile();

    service = module.get<ActivitylogService>(ActivitylogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
