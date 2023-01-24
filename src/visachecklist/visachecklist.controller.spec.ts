import { Test, TestingModule } from '@nestjs/testing';
import { VisachecklistController } from './visachecklist.controller';
import { VisachecklistService } from './visachecklist.service';

describe('VisachecklistController', () => {
  let controller: VisachecklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisachecklistController],
      providers: [VisachecklistService],
    }).compile();

    controller = module.get<VisachecklistController>(VisachecklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
