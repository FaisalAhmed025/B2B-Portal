import { Test, TestingModule } from '@nestjs/testing';
import { VisainfoService } from './visainfo.service';

describe('VisainfoService', () => {
  let service: VisainfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisainfoService],
    }).compile();

    service = module.get<VisainfoService>(VisainfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
