import { Test, TestingModule } from '@nestjs/testing';
import { AllpackagesController } from './allpackages.controller';
import { AllpackagesService } from './allpackages.service';

describe('AllpackagesController', () => {
  let controller: AllpackagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllpackagesController],
      providers: [AllpackagesService],
    }).compile();

    controller = module.get<AllpackagesController>(AllpackagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
