import { Test, TestingModule } from '@nestjs/testing';
import { FailedbookingService } from './failedbooking.service';

describe('FailedbookingService', () => {
  let service: FailedbookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FailedbookingService],
    }).compile();

    service = module.get<FailedbookingService>(FailedbookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
