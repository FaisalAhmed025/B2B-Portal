import { Test, TestingModule } from '@nestjs/testing';
import { ReissueController } from './reissue.controller';
import { ReissueService } from './reissue.service';

describe('ReissueController', () => {
  let controller: ReissueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReissueController],
      providers: [ReissueService],
    }).compile();

    controller = module.get<ReissueController>(ReissueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
