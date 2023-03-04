import { Test, TestingModule } from '@nestjs/testing';
import { BankaccountsService } from './bankaccounts.service';

describe('BankaccountsService', () => {
  let service: BankaccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankaccountsService],
    }).compile();

    service = module.get<BankaccountsService>(BankaccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
