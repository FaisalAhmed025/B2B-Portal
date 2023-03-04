import { Test, TestingModule } from '@nestjs/testing';
import { StafflistService } from './stafflist.service';

describe('StafflistService', () => {
  let service: StafflistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StafflistService],
    }).compile();

    service = module.get<StafflistService>(StafflistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
