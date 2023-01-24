import { Test, TestingModule } from '@nestjs/testing';
import { SegmentonewayController } from './segmentoneway.controller';
import { SegmentonewayService } from './segmentoneway.service';

describe('SegmentonewayController', () => {
  let controller: SegmentonewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SegmentonewayController],
      providers: [SegmentonewayService],
    }).compile();

    controller = module.get<SegmentonewayController>(SegmentonewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
