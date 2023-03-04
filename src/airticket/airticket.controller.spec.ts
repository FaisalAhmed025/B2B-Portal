import { Test, TestingModule } from '@nestjs/testing';
import { AirticketController } from './airticket.controller';
import { AirticketService } from './airticket.service';

describe('AirticketController', () => {
  let controller: AirticketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirticketController],
      providers: [AirticketService],
    }).compile();

    controller = module.get<AirticketController>(AirticketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
