import { Test, TestingModule } from '@nestjs/testing';
import { VoidController } from './void.controller';
import { VoidService } from './void.service';

describe('VoidController', () => {
  let controller: VoidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoidController],
      providers: [VoidService],
    }).compile();

    controller = module.get<VoidController>(VoidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
