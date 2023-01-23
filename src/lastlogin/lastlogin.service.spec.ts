import { Test, TestingModule } from '@nestjs/testing';
import { LastloginService } from './lastlogin.service';

describe('LastloginService', () => {
  let service: LastloginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LastloginService],
    }).compile();

    service = module.get<LastloginService>(LastloginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
