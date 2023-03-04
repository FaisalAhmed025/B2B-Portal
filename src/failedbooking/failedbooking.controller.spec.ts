import { Test, TestingModule } from '@nestjs/testing';
import { FailedbookingController } from './failedbooking.controller';
import { FailedbookingService } from './failedbooking.service';

describe('FailedbookingController', () => {
  let controller: FailedbookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FailedbookingController],
      providers: [FailedbookingService],
    }).compile();

    controller = module.get<FailedbookingController>(FailedbookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
