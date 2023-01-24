import { Test, TestingModule } from '@nestjs/testing';
import { VoidService } from './void.service';

describe('VoidService', () => {
  let service: VoidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoidService],
    }).compile();

    service = module.get<VoidService>(VoidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
