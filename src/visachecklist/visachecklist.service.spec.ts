import { Test, TestingModule } from '@nestjs/testing';
import { VisachecklistService } from './visachecklist.service';

describe('VisachecklistService', () => {
  let service: VisachecklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisachecklistService],
    }).compile();

    service = module.get<VisachecklistService>(VisachecklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
