import { Test, TestingModule } from '@nestjs/testing';
import { AllairlinesService } from './allairlines.service';

describe('AllairlinesService', () => {
  let service: AllairlinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllairlinesService],
    }).compile();

    service = module.get<AllairlinesService>(AllairlinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
