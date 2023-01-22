import { Test, TestingModule } from '@nestjs/testing';
import { AllpackagesService } from './allpackages.service';

describe('AllpackagesService', () => {
  let service: AllpackagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllpackagesService],
    }).compile();

    service = module.get<AllpackagesService>(AllpackagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
