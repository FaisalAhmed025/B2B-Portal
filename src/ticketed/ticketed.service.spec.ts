import { Test, TestingModule } from '@nestjs/testing';
import { TicketedService } from './ticketed.service';

describe('TicketedService', () => {
  let service: TicketedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketedService],
    }).compile();

    service = module.get<TicketedService>(TicketedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
