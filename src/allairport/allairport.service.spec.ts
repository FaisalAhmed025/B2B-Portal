import { Test, TestingModule } from '@nestjs/testing';
import { AllairportService } from './allairport.service';

describe('AllairportService', () => {
  let service: AllairportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllairportService],
    }).compile();

    service = module.get<AllairportService>(AllairportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
