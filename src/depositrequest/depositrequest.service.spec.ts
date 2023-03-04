import { Test, TestingModule } from '@nestjs/testing';
import { DepositrequestService } from './depositrequest.service';

describe('DepositrequestService', () => {
  let service: DepositrequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositrequestService],
    }).compile();

    service = module.get<DepositrequestService>(DepositrequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
