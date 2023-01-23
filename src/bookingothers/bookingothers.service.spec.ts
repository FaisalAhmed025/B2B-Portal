import { Test, TestingModule } from '@nestjs/testing';
import { BookingothersService } from './bookingothers.service';

describe('BookingothersService', () => {
  let service: BookingothersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingothersService],
    }).compile();

    service = module.get<BookingothersService>(BookingothersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
