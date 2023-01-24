import { Test, TestingModule } from '@nestjs/testing';
import { VisainfoController } from './visainfo.controller';
import { VisainfoService } from './visainfo.service';

describe('VisainfoController', () => {
  let controller: VisainfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisainfoController],
      providers: [VisainfoService],
    }).compile();

    controller = module.get<VisainfoController>(VisainfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
