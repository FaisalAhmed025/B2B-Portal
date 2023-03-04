import { Test, TestingModule } from '@nestjs/testing';
import { DepositrequestController } from './depositrequest.controller';
import { DepositrequestService } from './depositrequest.service';

describe('DepositrequestController', () => {
  let controller: DepositrequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositrequestController],
      providers: [DepositrequestService],
    }).compile();

    controller = module.get<DepositrequestController>(DepositrequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
