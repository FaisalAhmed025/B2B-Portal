import { Test, TestingModule } from '@nestjs/testing';
import { BankaccountsController } from './bankaccounts.controller';
import { BankaccountsService } from './bankaccounts.service';

describe('BankaccountsController', () => {
  let controller: BankaccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankaccountsController],
      providers: [BankaccountsService],
    }).compile();

    controller = module.get<BankaccountsController>(BankaccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
