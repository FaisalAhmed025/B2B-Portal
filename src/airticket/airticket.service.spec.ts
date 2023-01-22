import { Test, TestingModule } from '@nestjs/testing';
import { AirticketService } from './airticket.service';

describe('AirticketService', () => {
  let service: AirticketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirticketService],
    }).compile();

    service = module.get<AirticketService>(AirticketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
