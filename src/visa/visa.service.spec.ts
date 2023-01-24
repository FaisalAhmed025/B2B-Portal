import { Test, TestingModule } from '@nestjs/testing';
import { VisaService } from './visa.service';

describe('VisaService', () => {
  let service: VisaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisaService],
    }).compile();

    service = module.get<VisaService>(VisaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
