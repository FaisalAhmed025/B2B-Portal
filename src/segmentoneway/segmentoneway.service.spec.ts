import { Test, TestingModule } from '@nestjs/testing';
import { SegmentonewayService } from './segmentoneway.service';

describe('SegmentonewayService', () => {
  let service: SegmentonewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SegmentonewayService],
    }).compile();

    service = module.get<SegmentonewayService>(SegmentonewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
