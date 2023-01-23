import { Test, TestingModule } from '@nestjs/testing';
import { LastloginController } from './lastlogin.controller';
import { LastloginService } from './lastlogin.service';

describe('LastloginController', () => {
  let controller: LastloginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LastloginController],
      providers: [LastloginService],
    }).compile();

    controller = module.get<LastloginController>(LastloginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
