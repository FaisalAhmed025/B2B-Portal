import { Test, TestingModule } from '@nestjs/testing';
import { BookingothersController } from './bookingothers.controller';
import { BookingothersService } from './bookingothers.service';

describe('BookingothersController', () => {
  let controller: BookingothersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingothersController],
      providers: [BookingothersService],
    }).compile();

    controller = module.get<BookingothersController>(BookingothersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
