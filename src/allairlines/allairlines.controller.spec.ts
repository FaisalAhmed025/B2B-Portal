import { Test, TestingModule } from '@nestjs/testing';
import { AllairlinesController } from './allairlines.controller';
import { AllairlinesService } from './allairlines.service';

describe('AllairlinesController', () => {
  let controller: AllairlinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllairlinesController],
      providers: [AllairlinesService],
    }).compile();

    controller = module.get<AllairlinesController>(AllairlinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
