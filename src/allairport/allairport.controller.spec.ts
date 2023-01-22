import { Test, TestingModule } from '@nestjs/testing';
import { AllairportController } from './allairport.controller';
import { AllairportService } from './allairport.service';

describe('AllairportController', () => {
  let controller: AllairportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllairportController],
      providers: [AllairportService],
    }).compile();

    controller = module.get<AllairportController>(AllairportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
