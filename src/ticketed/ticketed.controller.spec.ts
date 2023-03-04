import { Test, TestingModule } from '@nestjs/testing';
import { TicketedController } from './ticketed.controller';
import { TicketedService } from './ticketed.service';

describe('TicketedController', () => {
  let controller: TicketedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketedController],
      providers: [TicketedService],
    }).compile();

    controller = module.get<TicketedController>(TicketedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
